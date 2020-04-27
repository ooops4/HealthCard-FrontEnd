import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationDoctorService } from './authentication-doctor.service'

@Injectable()
export class AuthGuardDoctorService implements CanActivate {
  constructor(private authDoctor: AuthenticationDoctorService, private router: Router) {}

  canActivate() {
    if (!this.authDoctor.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
