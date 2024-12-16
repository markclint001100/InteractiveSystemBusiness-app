export interface User {
  id?: number;
  email: string;
  name: string;
  title: string;
  company: string;
  createdAt: Date;
}

export interface UserSettings {
  id?: number;
  userId: number;
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

export interface MetricsData {
  id?: number;
  platform: string;
  type: string;
  value: number;
  date: Date;
}