import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Services</h1>
        <button class="btn btn-primary">Add New Service</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Service cards will go here -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">Service Name</h2>
            <p class="text-gray-600 mb-4">Service description goes here</p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold">$99.99</span>
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ServicesListComponent {} 