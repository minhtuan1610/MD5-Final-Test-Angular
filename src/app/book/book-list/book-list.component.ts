import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  booklength: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
      this.booklength = books.length;
    });
  }
}
