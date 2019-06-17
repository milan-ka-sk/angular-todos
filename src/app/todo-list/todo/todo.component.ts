import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() data: Todo;
  @Output() clicked = new EventEmitter<Todo>();

  ngOnInit() {
  }

  onClick(data){
    this.clicked.emit(data);
  }

}
