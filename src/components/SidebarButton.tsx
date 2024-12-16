import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarButtonProps {
  item: {
    id: string;
    label: string;
    icon: LucideIcon;
  };
  isActive: boolean;
  onClick: () => void;
}

export function SidebarButton({ item, isActive, onClick }: SidebarButtonProps) {
  const Icon = item.icon;
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{item.label}</span>
    </button>
  );
}