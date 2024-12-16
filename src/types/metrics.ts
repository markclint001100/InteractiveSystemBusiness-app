export interface PlatformMetric {
  impressions: string;
  clicks: string;
  conversions: string;
  spend: string;
}

export interface AnalyticsMetric {
  users: string;
  sessions: string;
  pageviews: string;
  bounceRate: string;
}

export type Metrics = {
  'google-ads': PlatformMetric;
  'linkedin-ads': PlatformMetric;
  'bing-ads': PlatformMetric;
  'analytics': AnalyticsMetric;
};