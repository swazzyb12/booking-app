import { Component } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">Service Details</h1>
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="space-y-4">
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Service Name</h2>
            <p class="text-gray-600">Service name details</p>
          </div>
          
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Description</h2>
            <p class="text-gray-600">Service description details</p>
          </div>
          
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Price</h2>
            <p class="text-gray-600">$99.99</p>
          </div>
          
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Duration</h2>
            <p class="text-gray-600">1 hour</p>
          </div>
          
          <div class="flex justify-end space-x-4">
            <button class="btn btn-secondary">Back</button>
            <button class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ServiceDetailComponent {} 