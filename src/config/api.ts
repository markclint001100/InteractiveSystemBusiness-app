export const API_CONFIG = {
  googleAds: {
    clientId: import.meta.env.VITE_GOOGLE_ADS_CLIENT_ID,
    clientSecret: import.meta.env.VITE_GOOGLE_ADS_CLIENT_SECRET,
    developerToken: import.meta.env.VITE_GOOGLE_ADS_DEVELOPER_TOKEN,
  },
  linkedIn: {
    clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
    clientSecret: import.meta.env.VITE_LINKEDIN_CLIENT_SECRET,
  },
  bingAds: {
    clientId: import.meta.env.VITE_BING_CLIENT_ID,
    clientSecret: import.meta.env.VITE_BING_CLIENT_SECRET,
    developerToken: import.meta.env.VITE_BING_DEVELOPER_TOKEN,
  },
  analytics: {
    clientId: import.meta.env.VITE_GA_CLIENT_ID,
    clientSecret: import.meta.env.VITE_GA_CLIENT_SECRET,
  },
};