/**
 * Created by Vladimir on 06.10.2016.
 */

import {Component, Input} from '@angular/core';
import {Todo} from './Todo';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css']
})
export class TodoListComponent{
    @Input() todos : Todo[];
    onTodoDeleted(todo : Todo){
        if (todo) {
            let index = this.todos.indexOf(todo);
            if (index > -1){
                this.todos.splice(index, 1);
            }
        }
        console.log(todo);
    }
}
