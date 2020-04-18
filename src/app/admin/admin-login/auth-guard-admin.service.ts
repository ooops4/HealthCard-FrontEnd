import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationAdminService } from './authentication-admin.service'

@Injectable()
export class AuthGuardAdminService implements CanActivate {
  constructor(private authAdmin: AuthenticationAdminService, private router: Router) {}

  canActivate() {
    if (!this.authAdmin.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
