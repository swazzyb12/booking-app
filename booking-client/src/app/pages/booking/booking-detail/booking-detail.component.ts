import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-detail',
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">Booking Details</h1>
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="space-y-4">
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Service Information</h2>
            <p class="text-gray-600">Service Name</p>
          </div>
          
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Date & Time</h2>
            <p class="text-gray-600">Date and time details</p>
          </div>
          
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Status</h2>
            <p class="text-gray-600">Booking status</p>
          </div>
          
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Notes</h2>
            <p class="text-gray-600">Additional notes</p>
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
export class BookingDetailComponent {} 