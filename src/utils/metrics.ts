import type { Metrics } from '../types/metrics';

const PLATFORM_METRICS: Metrics = {
  'google-ads': {
    impressions: '2.4M',
    clicks: '85.2K',
    conversions: '12.5K',
    spend: '$45,678',
  },
  'linkedin-ads': {
    impressions: '856K',
    clicks: '32.1K',
    conversions: '4.2K',
    spend: '$28,456',
  },
  'bing-ads': {
    impressions: '654K',
    clicks: '24.3K',
    conversions: '3.1K',
    spend: '$15,234',
  },
  'analytics': {
    users: '125.4K',
    sessions: '198.2K',
    pageviews: '456.7K',
    bounceRate: '42.3%',
  },
};

export function getPlatformMetrics(platform: string) {
  return PLATFORM_METRICS[platform as keyof typeof PLATFORM_METRICS] || null;
}