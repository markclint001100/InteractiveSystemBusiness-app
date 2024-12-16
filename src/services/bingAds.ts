import { API_CONFIG } from '../config/api';

class BingAdsService {
  private accessToken: string | null = null;

  async authenticate() {
    // Implement Microsoft Advertising OAuth flow
    // Store access token
  }

  async getMetrics(accountId: string, dateRange: { start: Date; end: Date }) {
    if (!this.accessToken) {
      await this.authenticate();
    }

    try {
      const response = await fetch(
        `https://api.ads.microsoft.com/v13/reporting/download?reportId=${accountId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reportRequest: {
              format: 'Json',
              reportName: 'Performance Report',
              aggregation: 'Daily',
              timeInterval: {
                startDate: dateRange.start.toISOString(),
                endDate: dateRange.end.toISOString(),
              },
              scope: {
                accountIds: [accountId],
              },
              columns: ['Impressions', 'Clicks', 'Conversions', 'Spend'],
            },
          }),
        }
      );

      const data = await response.json();
      return {
        impressions: data.reduce((sum: number, row: any) => sum + row.Impressions, 0),
        clicks: data.reduce((sum: number, row: any) => sum + row.Clicks, 0),
        conversions: data.reduce((sum: number, row: any) => sum + row.Conversions, 0),
        spend: data.reduce((sum: number, row: any) => sum + row.Spend, 0),
      };
    } catch (error) {
      console.error('Error fetching Bing Ads metrics:', error);
      throw error;
    }
  }
}

export const bingAdsService = new BingAdsService();