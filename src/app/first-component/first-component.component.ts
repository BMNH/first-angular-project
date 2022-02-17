import { Component, Input, OnInit } from '@angular/core';

export interface User {
  firstname: string;
  lastname: string;
}
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponent implements OnInit {
@Input() users: User[] = [];

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
