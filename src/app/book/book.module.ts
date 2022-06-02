import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookViewComponent } from './book-view/book-view.component';


@NgModule({
  declarations: [BookListComponent, BookCreateComponent, BookUpdateComponent, BookDeleteComponent, BookViewComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
