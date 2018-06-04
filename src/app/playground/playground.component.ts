import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  allowNewStatus = false
  testId: number = 10
  status: String = "SOOOO AWSOME"

  aTestState = "hullo"
  constructor() { 
    setTimeout(() => {
      this.allowNewStatus = true
    },500)
  }

  ngOnInit() {
  }
  getThatStatus() {
    return this.status
  }

  onCreateServer() {
    this.aTestState = "Event Binding Example"
  }
  //The Weird cast is a type script thing.
  onUpdate(event: Event) {
    this.aTestState = (<HTMLInputElement>event.target).value
    
  }
}
