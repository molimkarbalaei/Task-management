import { User } from "../models/user.model";

export const MOCK_USERS: User[] = [
  { id: 'u1', userName: 'admin', email: 'admin@company.com', password: 'admin123', role: 'admin' },
  { id: 'u2', userName: 'superAdmin', email: 'superadmin@company.com', password: 'superAdmin123', role: 'admin' },
  { id: 'u3', userName: 'dev1', email: 'dev1@company.com', password: 'dev123', role: 'premiumUser' },
  { id: 'u4', userName: 'dev2', email: 'dev2@company.com', password: 'dev123', role: 'user' },
];
