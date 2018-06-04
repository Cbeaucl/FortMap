import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  allowNewStatus = false
  testId: number = 10

  status: String = "SOOOO AWSOME"
  constructor() { 
    setTimeout(() => {
      this.allowNewStatus = true
    },2000)
  }

  ngOnInit() {
  }
  getThatStatus() {
    return this.status
  }
}
