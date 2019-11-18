import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  totalTicketCount:BehaviorSubject<number> =
   new BehaviorSubject<number>(10);
}
