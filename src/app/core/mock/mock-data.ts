import { User } from "../models/user.model";

export const MOCK_USERS: User[] = [
  { id: 'u1', username: 'admin', email: 'admin@company.com', password: 'admin123', role: 'admin' },
  { id: 'u2', username: 'superAdmin', email: 'superadmin@company.com', password: 'superAdmin123', role: 'admin' },
  { id: 'u3', username: 'dev1', email: 'dev1@company.com', password: 'dev123', role: 'premiumUser' },
  { id: 'u4', username: 'dev2', email: 'dev2@company.com', password: 'dev123', role: 'user' },
];
