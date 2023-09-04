import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {

constructor(private router:Router, 
  private service: AuthService) {

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
   
  
    if (this.service.loggedIn()) {
      return true;
    } else {
      // Redirect to the login page or some other route if not authenticated
       this.router.navigate(['/login']);
       return false
    }
  }
}