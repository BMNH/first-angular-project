import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() footer: string = "";
@Output() eventAction: EventEmitter<Date>;

  constructor() {
    this.eventAction = new EventEmitter<Date>();
  }

  ngOnInit(): void {
    this.eventAction.emit(new Date());
  }

  action() {
    this.eventAction.emit(new Date());
  }

}
