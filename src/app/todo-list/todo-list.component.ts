import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: Todo[];

  ngOnInit() {
    this.todos = this.getTodos();
  }

  getTodos(){
    return this.todoService.getTodos();
  }

  todoClicked(todo: Todo){
    console.log("todo clicked .. from list");
    console.log(todo);
    this.markTodo(todo);
  }

  markTodo(todo: Todo){
    this.todoService.markTodo(todo)
  }

}
