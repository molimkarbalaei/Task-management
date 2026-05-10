export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user' | 'premiumUser';
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}