import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  msg : any;
  @Output()
  event = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    this.event.emit(this.msg);
    console.log('Sending Data',this.msg);
  }

  @Input()
  inData : any;
}
