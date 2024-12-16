import { useNavigate, useLocation } from 'react-router-dom';
import { getMenuItems } from '../utils/constants';
import { SidebarButton } from './SidebarButton';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = getMenuItems(user?.role);

  const handleClick = (itemId: string) => {
    if (itemId === 'home') {
      navigate('/');
    } else if (itemId === 'create-user') {
      navigate('/create-user');
    } else {
      navigate(`/platform/${itemId}`);
    }
    onClose();
  };

  const isItemActive = (itemId: string) => {
    if (itemId === 'home') {
      return location.pathname === '/';
    } else if (itemId === 'create-user') {
      return location.pathname === '/create-user';
    }
    return location.pathname === `/platform/${itemId}`;
  };

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-primary">Interactive Business System</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <SidebarButton
              key={item.id}
              item={item}
              isActive={isItemActive(item.id)}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}