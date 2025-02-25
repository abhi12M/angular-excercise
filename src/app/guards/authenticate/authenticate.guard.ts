import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authenticateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userData = localStorage.getItem('userData');

  if (userData) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
