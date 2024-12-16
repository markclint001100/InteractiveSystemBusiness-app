import { useParams } from 'react-router-dom';
import { MetricsGrid } from './MetricsGrid';
import { PerformanceChart } from './PerformanceChart';

interface DashboardContentProps {
  platform: string;
}

export function DashboardContent({ platform }: DashboardContentProps) {
  const { id } = useParams();
  const currentPlatform = platform || id || '';
  
  return (
    <div className="p-4 md:p-6 lg:p-8 w-full">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        {currentPlatform.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Dashboard
      </h1>
      
      <MetricsGrid platform={currentPlatform} />
      <PerformanceChart />
    </div>
  );
}