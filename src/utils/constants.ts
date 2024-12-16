import { Home, Chrome, Linkedin, BarChart3, LineChart, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const MENU_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'google-ads', label: 'Google Ads', icon: Chrome },
  { id: 'linkedin-ads', label: 'LinkedIn Ads', icon: Linkedin },
  { id: 'bing-ads', label: 'Bing Ads', icon: BarChart3 },
  { id: 'analytics', label: 'Analytics', icon: LineChart },
] as const;

export const getMenuItems = (userRole?: string) => {
  if (userRole === 'super_admin') {
    return [
      ...MENU_ITEMS,
      { id: 'create-user', label: 'Create User', icon: UserPlus },
    ];
  }
  return MENU_ITEMS;
};