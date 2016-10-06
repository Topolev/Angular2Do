/**
 * Created by Vladimir on 06.10.2016.
 */



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TodoListComponent} from './todo/todo-list.component';
import { TodoItemComponent } from './todo/todo-item.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent ,
        TodoListComponent,
        TodoItemComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }