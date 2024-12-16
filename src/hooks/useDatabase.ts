import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';

export function useCurrentUser() {
  return useLiveQuery(async () => {
    const users = await db.users.toArray();
    return users[0];
  });
}

export function useUserSettings(userId: number) {
  return useLiveQuery(async () => {
    return await db.settings.where('userId').equals(userId).first();
  }, [userId]);
}

export function useMetrics(platform: string, timeRange: string = '7d') {
  return useLiveQuery(async () => {
    const date = new Date();
    date.setDate(date.getDate() - (timeRange === '7d' ? 7 : 30));
    
    return await db.metrics
      .where('platform')
      .equals(platform)
      .and(item => item.date >= date)
      .toArray();
  }, [platform, timeRange]);
}