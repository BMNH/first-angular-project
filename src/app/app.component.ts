import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public users; 
public title;
childData:Date =  new Date;

  constructor () { 
    this.users = [
    {firstname: 'fistname1', lastname: 'lastname1'},
    {firstname: 'fistname2', lastname: 'lastname2'},
    {firstname: 'fistname3', lastname: 'lastname3'},
    {firstname: 'fistname4', lastname: 'lastname4'},
  ]
 this.title = "My title";
}

footerActionChanges(event: Date){
console.log(event);
this.childData = event;
}

}
