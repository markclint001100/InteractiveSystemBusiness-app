import { ThemeToggle } from '../ThemeToggle';
import { UserProfile } from '../UserProfile';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-end h-16 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <UserProfile />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}