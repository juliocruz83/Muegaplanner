import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class SelectDateService {
  private date:Subject<Date> = new Subject<Date>();
  date$ = this.date.asObservable();

  selectDate(date:Date) {
    this.date.next(date);
  }
}