import { LucideIcon } from 'lucide-react';

export interface Platform {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  metrics: {
    label: string;
    value: string;
  }[];
}