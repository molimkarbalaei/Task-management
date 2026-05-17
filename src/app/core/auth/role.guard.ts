import { inject } from "@angular/core";
import { User } from "../models/user.model";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const roleGuard = (...roles: User['role'][]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
      router.navigate(['/login']);
      return false;
    }

    if (!authService.hasRole(roles)) {
      router.navigate(['/dashboard']);
      return false;
    }

    return true;
  };
};
