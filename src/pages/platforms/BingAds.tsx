import { MetricsGrid } from '../../components/MetricsGrid';
import { PerformanceChart } from '../../components/PerformanceChart';

export function BingAds() {
  return (
    <div className="p-4 md:p-6 lg:p-8 w-full">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        Bing Ads Dashboard
      </h1>
      
      <MetricsGrid platform="bing-ads" />
      <PerformanceChart />
    </div>
  );
}