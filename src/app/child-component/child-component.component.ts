import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Output() created = new EventEmitter<any>();  
@Input() show: boolean;
  constructor() { }

  ngOnInit() {
  }

fullName = new FormControl('');
email = new FormControl('');
saved(){
  this.created.emit({fullName: this.fullName, email: this.email})
}
}