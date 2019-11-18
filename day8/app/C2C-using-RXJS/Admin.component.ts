import {Component} from '@angular/core';
import {BookingService} from "../booking.service";

@Component({
    selector: 'admin-booking-cmp',
    template: `
        <div>
            <h1>Welcome to bookshow.com</h1>
            <span>Welcome admin</span>
            <p>Currently, Number of Tickets available are: {{ticketCount}}</p>
            <button (click)="bookShow()">Book Ticket</button>
        </div>
    `
})

export class AdminBookingComponent {
    ticketCount:number = 0;

    constructor(private _bookingService:BookingService) {
        this._bookingService.totalTicketCount.subscribe(totalTicketCount => {
            this.ticketCount = totalTicketCount
        });
    }

    bookShow = () => {
        let ticketCount = this.ticketCount - 1;
        this._bookingService.totalTicketCount.next(ticketCount);
    }
}