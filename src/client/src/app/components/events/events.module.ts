import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { EventsRoutingModule } from '@muega-components/events/events-routing.module';
import { EventCtrlComponent } from '@muega-components/events/event-ctrl/event-ctrl.component';
import { DailyViewComponent } from '@muega-components/events/daily-view/daily-view.component';
import { EditComponent } from '@muega-components/events/edit/edit.component';
import { EventService } from '@muega-services/event.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventsRoutingModule,
    MaterialModule
  ],
  declarations: [
    EventCtrlComponent,
    DailyViewComponent,
    EditComponent
  ],
  providers: [
    EventService
  ],
  exports: [
    EventCtrlComponent
  ]
})
export class EventsModule {}