import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Profile Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and preferences.
            </p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
            <form #profileForm="ngForm" (ngSubmit)="onSubmit()">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="name" id="name" [(ngModel)]="name"
                         class="input mt-1">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" name="email" id="email" [(ngModel)]="email"
                         class="input mt-1">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone number</label>
                  <input type="tel" name="phone" id="phone" [(ngModel)]="phone"
                         class="input mt-1">
                </div>
              </div>
              <div class="mt-6">
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent {
  name: string = '';
  email: string = '';
  phone: string = '';

  onSubmit() {
    // Handle profile update logic here
    console.log('Profile update:', this.name, this.email, this.phone);
  }
}
