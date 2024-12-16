import { API_CONFIG } from '../config/api';

class LinkedInAdsService {
  private baseUrl = 'https://api.linkedin.com/v2';
  private accessToken: string | null = null;

  async authenticate() {
    // Implement LinkedIn OAuth flow
    // Store access token
  }

  async getMetrics(accountId: string, dateRange: { start: Date; end: Date }) {
    if (!this.accessToken) {
      await this.authenticate();
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/adAnalytics?q=analytics&pivot=CAMPAIGN&dateRange.start=${dateRange.start.toISOString()}&dateRange.end=${dateRange.end.toISOString()}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );

      const data = await response.json();
      return {
        impressions: data.elements.reduce((sum: number, el: any) => sum + el.impressions, 0),
        clicks: data.elements.reduce((sum: number, el: any) => sum + el.clicks, 0),
        conversions: data.elements.reduce((sum: number, el: any) => sum + el.conversions, 0),
        spend: data.elements.reduce((sum: number, el: any) => sum + el.costInLocalCurrency, 0),
      };
    } catch (error) {
      console.error('Error fetching LinkedIn Ads metrics:', error);
      throw error;
    }
  }
}

export const linkedInAdsService = new LinkedInAdsService();