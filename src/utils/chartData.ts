// Mock data generators for charts
export function getPerformanceData() {
  return [
    { name: 'Google Ads', impressions: 2400000, conversions: 12500 },
    { name: 'LinkedIn Ads', impressions: 856000, conversions: 4200 },
    { name: 'Bing Ads', impressions: 654000, conversions: 3100 },
  ];
}

export function getPlatformShare() {
  return [
    { name: 'Google Ads', value: 45 },
    { name: 'LinkedIn Ads', value: 30 },
    { name: 'Bing Ads', value: 15 },
    { name: 'Analytics', value: 10 },
  ];
}

export function getTrendData() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return months.map(month => ({
    date: month,
    googleAds: Math.floor(Math.random() * 100000) + 50000,
    linkedInAds: Math.floor(Math.random() * 80000) + 30000,
    bingAds: Math.floor(Math.random() * 60000) + 20000,
  }));
}