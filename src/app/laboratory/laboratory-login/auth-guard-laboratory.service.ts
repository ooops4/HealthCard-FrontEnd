import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationLaboratoryService } from './authentication-Laboratory.service'

@Injectable()
export class AuthGuardLaboratoryService implements CanActivate {
  constructor(private authLaboratory: AuthenticationLaboratoryService, private router: Router) {}

  canActivate() {
    if (!this.authLaboratory.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
