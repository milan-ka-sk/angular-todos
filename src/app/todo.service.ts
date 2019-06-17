import { Injectable } from '@angular/core';
import { Todo } from './todo-list/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo [] = [
    { 
      id: 1,
      body: "todo 1",
      isDone: false
    },
    { 
      id: 2,
      body: "todo 2",
      isDone: false
    },
    { 
      id: 3,
      body: "todo 3",
      isDone: false
    }
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  markTodo(todo: Todo){
    console.log("from service..");
    console.log(todo);  
    this.todos.map(
     (el) => {
       if(el.id === todo.id) {
         el.isDone = !el.isDone;
       } 
       return el;
     }
    );

    console.log(this.todos);
  }
}
