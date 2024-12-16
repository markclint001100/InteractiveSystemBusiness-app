import { useMemo } from 'react';
import { getPlatformMetrics } from '../utils/metrics';

export function useMetrics(platform: string) {
  const metrics = useMemo(() => getPlatformMetrics(platform), [platform]);
  
  const formattedMetrics = useMemo(() => {
    if (!metrics) return null;
    
    return Object.entries(metrics).map(([key, value]) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      value,
      change: Math.floor(Math.random() * 20) + 5,
    }));
  }, [metrics]);

  return formattedMetrics;
}