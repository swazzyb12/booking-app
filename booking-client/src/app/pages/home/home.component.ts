import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-white">
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Booking App
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Book your services with ease and convenience. Our platform makes it simple to schedule and manage your appointments.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a routerLink="/services" class="btn btn-primary">
                Browse Services
              </a>
              <a routerLink="/booking" class="btn btn-secondary">
                My Bookings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
