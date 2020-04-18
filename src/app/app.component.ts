import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthenticationAdminService } from './admin/admin-login/authentication-admin.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health Card';
  
  constructor(public auth: AuthenticationService, public authAdmin : AuthenticationAdminService){}

}
