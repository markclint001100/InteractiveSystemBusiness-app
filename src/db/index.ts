import Dexie, { Table } from 'dexie';
import { User, UserSettings, MetricsData } from '../types/database';
import { hashPassword } from '../utils/auth';

export class AppDatabase extends Dexie {
  users!: Table<User>;
  settings!: Table<UserSettings>;
  metrics!: Table<MetricsData>;

  constructor() {
    super('InteractiveBusinessSystemDB');
    
    this.version(1).stores({
      users: '++id, email, name, title, company, role, createdAt',
      settings: '++id, userId, theme, language, notifications',
      metrics: '++id, platform, type, value, date'
    });
  }
}

export const db = new AppDatabase();

// Initialize with default users if none exist
export async function initializeDatabase() {
  try {
    // Delete existing database to start fresh
    await db.delete();
    await db.open();
    
    // Add super admin
    await db.users.add({
      email: 'admin@interactivebusiness.com',
      name: 'System Administrator',
      title: 'Super Admin',
      company: 'Interactive Business System',
      role: 'super_admin',
      password: await hashPassword('admin123'),
      createdAt: new Date()
    });

    // Add demo user
    await db.users.add({
      email: 'demo@interactivebusiness.com',
      name: 'Demo User',
      title: 'Marketing Manager',
      company: 'Interactive Business System',
      role: 'user',
      password: await hashPassword('password'),
      createdAt: new Date()
    });

    console.log('Database initialized with default users');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}