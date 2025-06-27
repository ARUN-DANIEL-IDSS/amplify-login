import { Component } from '@angular/core';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amplify';
  constructor(private authService: AuthService) {
    // You can use the authService here if needed

  }
  async ngOnInit() {
    let user = await this.authService.getCurrentUser();
    console.log('Current User:', user);

  }
  formFields = {
    signUp: {
      name: {
        order: 1
      },
      email: {
        order: 2
      },
      password: {
        order: 5
      },
      confirm_password: {
        order: 6
      }
    },
  };
}
