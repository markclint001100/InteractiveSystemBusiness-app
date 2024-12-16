export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: number;
    email: string;
    name: string;
    role: 'user' | 'admin' | 'super_admin';
  } | null;
}