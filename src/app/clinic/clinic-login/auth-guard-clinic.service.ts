import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationClinicService } from './authentication-clinic.service'

@Injectable()
export class AuthGuardClinicService implements CanActivate {
  constructor(private authClinic: AuthenticationClinicService, private router: Router) {}

  canActivate() {
    if (!this.authClinic.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
