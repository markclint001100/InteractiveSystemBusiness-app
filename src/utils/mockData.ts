import { ChartData } from '../types/analytics';

const platforms = ['google-ads', 'linkedin-ads', 'bing-ads'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const generatePerformanceData = (): ChartData[] => {
  return months.flatMap((month) =>
    platforms.map((platform) => ({
      date: month,
      value: Math.floor(Math.random() * 100000) + 20000,
      platform,
    }))
  );
};