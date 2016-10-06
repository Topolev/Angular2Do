import { Component } from '@angular/core';
import {Todo} from  './todo/Todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],


})
export class AppComponent {
    title: string;
    todos: Todo[];
    constructor(){
        this.title = 'Angular2 ToDo';
        this.todos = [];
    }

    addTodo(title: string){
        this.todos.push(new Todo(title));
    }

}