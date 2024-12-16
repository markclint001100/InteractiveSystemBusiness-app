import { useState, useEffect } from 'react';
import { googleAdsService } from '../services/googleAds';
import { linkedInAdsService } from '../services/linkedIn';
import { bingAdsService } from '../services/bingAds';

export function useApiMetrics(platform: string, accountId: string) {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        setLoading(true);
        const dateRange = {
          start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
          end: new Date(),
        };

        let data;
        switch (platform) {
          case 'google-ads':
            data = await googleAdsService.getMetrics(accountId, dateRange);
            break;
          case 'linkedin-ads':
            data = await linkedInAdsService.getMetrics(accountId, dateRange);
            break;
          case 'bing-ads':
            data = await bingAdsService.getMetrics(accountId, dateRange);
            break;
          default:
            throw new Error(`Unsupported platform: ${platform}`);
        }

        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch metrics'));
      } finally {
        setLoading(false);
      }
    }

    if (accountId) {
      fetchMetrics();
    }
  }, [platform, accountId]);

  return { metrics, loading, error };
}