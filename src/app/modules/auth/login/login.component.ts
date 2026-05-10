import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hbs-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [],
})
export class LoginComponent {
    private router = inject(Router);

    
}
