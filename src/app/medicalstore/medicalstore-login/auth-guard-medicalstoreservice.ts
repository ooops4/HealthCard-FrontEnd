import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationMedicalStoreService } from './authentication-medicalstore.service'

@Injectable()
export class AuthGuardMedicalStoreService implements CanActivate {
  constructor(private authMedicalStore: AuthenticationMedicalStoreService, private router: Router) {}

  canActivate() {
    if (!this.authMedicalStore.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
