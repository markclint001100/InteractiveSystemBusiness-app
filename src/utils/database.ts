import { db } from '../db';
import type { User, UserSettings } from '../types/database';

export async function updateUserProfile(userId: number, data: Partial<User>) {
  await db.users.update(userId, data);
}

export async function updateUserSettings(userId: number, data: Partial<UserSettings>) {
  const settings = await db.settings.where('userId').equals(userId).first();
  
  if (settings) {
    await db.settings.update(settings.id!, data);
  } else {
    await db.settings.add({
      userId,
      theme: 'light',
      language: 'en',
      notifications: true,
      ...data
    });
  }
}

export async function updateUserPassword(userId: number, newPassword: string) {
  // In a real application, you would hash the password and use proper authentication
  console.log('Password update would happen here');
}