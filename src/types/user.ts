export interface User {
  id?: number;
  email: string;
  name: string;
  title: string;
  company: string;
  password: string;
  role: 'user' | 'admin' | 'super_admin';
  createdAt: Date;
}

export interface NewUser {
  email: string;
  name: string;
  title: string;
  company: string;
  password: string;
  role: 'user' | 'admin';
}