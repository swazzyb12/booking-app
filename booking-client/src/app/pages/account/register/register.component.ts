import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" #registerForm="ngForm" (ngSubmit)="onSubmit()">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="name" class="sr-only">Full Name</label>
              <input id="name" name="name" type="text" required
                     class="input rounded-t-md"
                     placeholder="Full Name" [(ngModel)]="name">
            </div>
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input id="email" name="email" type="email" required
                     class="input"
                     placeholder="Email address" [(ngModel)]="email">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" required
                     class="input rounded-b-md"
                     placeholder="Password" [(ngModel)]="password">
            </div>
          </div>

          <div>
            <button type="submit" class="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    // Handle registration logic here
    console.log('Registration attempt:', this.email);
  }
} 