import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: string;
    username: string;
    email: string;
    password: string;

    constructor(private validateService: ValidateService) {
    }

    ngOnInit() {
    }

    onRegisterSubmit(){
      const user = {
          name: this.name,
          email: this.email,
          username: this.username,
          password: this.password
      };

      // Required all fields
      if (!this.validateService.validateRegister(user)) {
          console.log('Please fill in all fields');
          return false;
      }

      // Required valid email
      if (!this.validateService.validateEmail(user.email)) {
          console.log('Please use a valid email');
          return false;
      }
    }

}
