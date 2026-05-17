import { computed, Injectable, signal } from "@angular/core";
import { AuthResponse, LoginRequest, User } from "../models/user.model";
import { delay, Observable, of, tap, throwError } from "rxjs";
import { MOCK_USERS } from "../mock/mock-data";


@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserAuth = signal<null | User>(null);
  private token = signal<string | null>(null);

  readonly currentUser = this.currentUserAuth.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUserAuth());
  readonly userRole = computed(() => this.currentUserAuth()?.role ?? null);

  login(request: LoginRequest): Observable<AuthResponse> {
    const user = MOCK_USERS.find((u) => u.username === request.username);

    if (!user) {
      return throwError(() => new Error('Invalid credentials')).pipe(delay(800));
    }
    //login-get token-attch token to request
    const response: AuthResponse = {
      user,
      token: `mock-token-${user.id}-${Date.now()}`,
    };

    return of(response).pipe(
      delay(1000),
      tap((res) => {
        this.currentUserAuth.set(res.user);
        this.token.set(res.token);
        this.saveToStorage(res);
      }),
    );
  }

  logout(): void {
    this.currentUserAuth.set(null);
    this.token.set(null);
    localStorage.removeItem('auth');
  }

  hasRole(roles: User['role'][]): boolean {
    const role = this.userRole();
    return role !== null && roles.includes(role);
  }
  
  private saveToStorage(response: AuthResponse): void {
    localStorage.setItem('auth', JSON.stringify(response));
  }
}

