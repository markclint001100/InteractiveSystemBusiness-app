import { Users, UserPlus, Settings } from 'lucide-react';

interface AdminMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AdminMenu({ activeSection, onSectionChange }: AdminMenuProps) {
  const menuItems = [
    { id: 'users', label: 'User List', icon: Users },
    { id: 'add-user', label: 'Add User', icon: UserPlus },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
      <nav className="flex space-x-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}