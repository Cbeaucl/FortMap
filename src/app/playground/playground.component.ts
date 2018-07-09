import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  allowNewStatus = false
  serverCreated = false
  testId: number = 10
  status: String = "SOOOO AWSOME"
  soRando: String 

  cakeList = ['Rasberry', 'Pie']

  aTestState = ""
  constructor() { 
    setTimeout(() => {
      this.allowNewStatus = true
    },500)
    this.soRando = Math.random() > 0.5 ? 'CAAAAKE' : 'PIIIIE'

  }

  ngOnInit() {
  }

  getColor() {
    return this.soRando ==='CAAAAKE'? 'RED' : 'GREEN'
  }
  getThatStatus() {
    return this.status
  }

  onCreateServer() {
    this.status = "created thing: " + this.aTestState 
    this.cakeList.push(this.aTestState)
  }
  //The Weird cast is a type script thing.
  onUpdate(event: Event) {
    this.aTestState = (<HTMLInputElement>event.target).value
    this.serverCreated = true
    
  }
}
