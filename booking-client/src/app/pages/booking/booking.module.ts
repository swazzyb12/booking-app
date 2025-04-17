import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingCreateComponent } from './booking-create/booking-create.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BOOKING_ROUTES } from './booking.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(BOOKING_ROUTES),
    // Import standalone components here instead of declaring them
    BookingListComponent,
    BookingCreateComponent,
    BookingDetailComponent
  ],
  // No declarations needed for standalone components
  declarations: []
})
export class BookingModule {}