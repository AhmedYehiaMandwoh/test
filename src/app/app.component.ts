import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerce';
  constructor(private service: AuthService, private route: ActivatedRoute, router: Router, private userService: UserService) {
    this.service.user$.subscribe(user => {
      if(user) {
        this.userService.save(user);
      }
    })
  }
}
