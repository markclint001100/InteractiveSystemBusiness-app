import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ThemeToggle } from './components/ThemeToggle';
import { UserProfile } from './components/UserProfile';
import { toggleDarkMode } from './utils/theme';
import { Home } from './pages/Home';
import { GoogleAds } from './pages/platforms/GoogleAds';
import { LinkedInAds } from './pages/platforms/LinkedInAds';
import { BingAds } from './pages/platforms/BingAds';
import { Analytics } from './pages/platforms/Analytics';
import { CreateUser } from './pages/CreateUser';
import { ProfileSettings } from './pages/ProfileSettings';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { Menu } from 'lucide-react';

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    toggleDarkMode(isDark);
  }, [isDark]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
                  <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md"
                    aria-label="Toggle menu"
                  >
                    <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>

                  {isSidebarOpen && (
                    <div 
                      className="fixed inset-0 bg-black/50 lg:hidden z-40"
                      onClick={() => setSidebarOpen(false)}
                    />
                  )}

                  <div
                    className={`
                      fixed lg:static w-[280px] h-screen bg-white dark:bg-gray-800 
                      transform transition-transform duration-300 ease-in-out z-50
                      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                      border-r border-gray-200 dark:border-gray-700
                    `}
                  >
                    <Sidebar onClose={() => setSidebarOpen(false)} />
                  </div>

                  <div className="flex-1">
                    <header className="sticky top-0 z-30 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-end h-16 px-4 md:px-6">
                        <div className="flex items-center gap-4">
                          <UserProfile />
                          <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
                        </div>
                      </div>
                    </header>

                    <main className="w-full">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/platform/google-ads" element={<GoogleAds />} />
                        <Route path="/platform/linkedin-ads" element={<LinkedInAds />} />
                        <Route path="/platform/bing-ads" element={<BingAds />} />
                        <Route path="/platform/analytics" element={<Analytics />} />
                        <Route path="/create-user" element={<CreateUser />} />
                        <Route path="/profile/settings" element={<ProfileSettings />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}