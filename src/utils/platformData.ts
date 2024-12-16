import { Chrome, BarChart3, Linkedin, LineChart } from 'lucide-react';
import type { Platform } from '../types/platform';

export const PLATFORM_LIST: Platform[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    description: 'Track and optimize your Google Ads campaigns performance',
    icon: Chrome,
    metrics: [
      { label: 'Impressions', value: '2.4M' },
      { label: 'Conversions', value: '12.5K' },
    ],
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Monitor website traffic and user behavior analytics',
    icon: LineChart,
    metrics: [
      { label: 'Users', value: '125.4K' },
      { label: 'Sessions', value: '198.2K' },
    ],
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    description: 'Manage and analyze your LinkedIn advertising campaigns',
    icon: Linkedin,
    metrics: [
      { label: 'Impressions', value: '856K' },
      { label: 'Conversions', value: '4.2K' },
    ],
  },
  {
    id: 'bing-ads',
    name: 'Bing Ads',
    description: 'Track performance of your Microsoft Advertising campaigns',
    icon: BarChart3,
    metrics: [
      { label: 'Impressions', value: '654K' },
      { label: 'Conversions', value: '3.1K' },
    ],
  },
];