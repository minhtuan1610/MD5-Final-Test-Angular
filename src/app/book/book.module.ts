import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookCreateComponent } from './book-create/book-create.component';


@NgModule({
  declarations: [BookListComponent, BookCreateComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
