import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState, LoginCredentials } from '../types/auth';
import { db } from '../db';
import { verifyPassword } from '../utils/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Load auth state from localStorage
const loadAuthState = (): AuthState => {
  const stored = localStorage.getItem('authState');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    isAuthenticated: false,
    user: null,
  };
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(loadAuthState());

  // Save auth state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState]);

  const login = async (credentials: LoginCredentials) => {
    try {
      const user = await db.users.where('email').equals(credentials.email).first();
      
      if (!user) {
        console.log('User not found:', credentials.email);
        return false;
      }

      const isValidPassword = await verifyPassword(credentials.password, user.password);
      
      if (isValidPassword) {
        setAuthState({
          isAuthenticated: true,
          user: {
            id: user.id!,
            email: user.email,
            name: user.name,
            role: user.role,
          },
        });
        return true;
      }

      console.log('Invalid password for user:', credentials.email);
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem('authState');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};