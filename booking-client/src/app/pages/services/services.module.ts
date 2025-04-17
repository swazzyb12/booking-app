import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ServicesListComponent } from './services-list/services-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { SERVICES_ROUTES} from './services.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES),
    // Import standalone components here instead of declaring them
    ServicesListComponent,
    ServiceDetailComponent
  ],
  // No declarations needed for standalone components
  declarations: []
})
export class ServicesModule {}