import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationHospitalService } from './authentication-hospital.service'

@Injectable()
export class AuthGuardHospitalService implements CanActivate {
  constructor(private authHospital: AuthenticationHospitalService, private router: Router) {}

  canActivate() {
    if (!this.authHospital.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
