/**
 * Created by Vladimir on 06.10.2016.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: ['./app/todo/todo-item.component.css']
})
export class TodoItemComponent{
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();
    toggleDone(){
        this.todo.done = !this.todo.done;
    }

    delete(){
        console.log("Delete (Item)");
        this.deleted.emit(this.todo);
    }
}
