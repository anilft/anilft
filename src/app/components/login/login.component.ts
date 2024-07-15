import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

export class Loginuser {
  password: any;
  username: any;
  name: any;
  status: any;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule, FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule, IconFieldModule , InputIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public loginuser: Loginuser = new Loginuser();
  public users: Loginuser[] = [];
  public loginerror: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  onSubmit() {
  }
}
