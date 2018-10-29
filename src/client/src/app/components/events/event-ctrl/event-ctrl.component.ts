import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-ctrl',
  templateUrl: './event-ctrl.component.html',
  styleUrls: ['./event-ctrl.component.css']
})
export class EventCtrlComponent implements OnInit {

  @Input() selectedDate: Date;
  constructor() { }

  ngOnInit() {
  }

}
