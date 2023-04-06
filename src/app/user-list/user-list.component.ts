import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  show = true;
  number = 0;
  counter(type:string){
    type=='add' ? this.number++ :this.number-- ;
  }
}
