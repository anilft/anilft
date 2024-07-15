import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export class Loginuser {
  password: any;
  username: any;
  name: any;
  status: any;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public loginuser: Loginuser = new Loginuser();
  public users: Loginuser[] = [];
  public loginerror: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.users = [
      {
        username: 'reddy@123.com',
        password: 'Reddy123',
        name: 'Narayana Reddy',
        status: true,
      },
      {
        username: 'akumar@provizit.com',
        password: '12345',
        name: 'Anil Kumar',
        status: true,
      }
    ];
  }
  onSubmit() {
    this.users.forEach((val) => {
      if (
        this.loginuser.username == val.username &&
        this.loginuser.password == val.password
      ) {
        sessionStorage.setItem('loginUser', JSON.stringify(val));
        this.router.navigate(['/']);
      } else {
        this.loginerror = true;
        setTimeout(() => {
          this.loginerror = false;
        }, 1000);
      }
    });
  }
}
