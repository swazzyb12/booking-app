import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-create',
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">Create New Booking</h1>
      <div class="bg-white shadow-md rounded-lg p-6">
        <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Service</label>
            <select formControlName="service" class="input">
              <option value="">Select a service</option>
              <!-- Service options will go here -->
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" formControlName="date" class="input">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Time</label>
            <input type="time" formControlName="time" class="input">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700">Notes</label>
            <textarea formControlName="notes" class="input" rows="3"></textarea>
          </div>
          
          <div class="flex justify-end space-x-4">
            <button type="button" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-primary">Create Booking</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class BookingCreateComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      // Handle form submission
      console.log(this.bookingForm.value);
    }
  }
}