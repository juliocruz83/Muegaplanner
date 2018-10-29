import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventCtrlComponent } from '@muega-components/events/event-ctrl/event-ctrl.component';
import { DailyViewComponent } from '@muega-components/events/daily-view/daily-view.component';
import { EditComponent } from '@muega-components/events/edit/edit.component';
 
const eventsRoutes: Routes = [
    {
      path: "",
      component: EventCtrlComponent,
      children: [
        { path: "", component: DailyViewComponent },
        { path: 'edit-event', component: EditComponent },
        { path: 'edit-event/:id', component: EditComponent }
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(eventsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventsRoutingModule {}