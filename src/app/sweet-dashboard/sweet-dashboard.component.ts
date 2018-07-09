import { Component } from '@angular/core';

@Component({
  selector: 'sweet-dashboard',
  templateUrl: './sweet-dashboard.component.html',
  styleUrls: ['./sweet-dashboard.component.css']
})
export class SweetDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2  , rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
