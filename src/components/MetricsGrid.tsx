import { BarChart3, Users, DollarSign, MousePointer } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';
import { useMetrics } from '../hooks/useMetrics';

const METRIC_ICONS = {
  impressions: BarChart3,
  clicks: MousePointer,
  conversions: Users,
  spend: DollarSign,
} as const;

interface MetricsGridProps {
  platform: string;
}

export function MetricsGrid({ platform }: MetricsGridProps) {
  const metrics = useMetrics(platform);

  if (!metrics) {
    return (
      <div className="text-center p-4 text-gray-500 dark:text-gray-400">
        No metrics available for this platform
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map(({ key, label, value, change }) => {
        const Icon = METRIC_ICONS[key as keyof typeof METRIC_ICONS] || BarChart3;
        return (
          <AnalyticsCard
            key={key}
            title={label}
            value={value}
            change={change}
            icon={<Icon className="w-6 h-6 text-primary" />}
          />
        );
      })}
    </div>
  );
}