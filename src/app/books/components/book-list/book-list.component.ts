import { Component, Input } from '@angular/core';
import { Book } from '@book-collection/books/models/book';

@Component({
  selector: 'bc-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() books: Book[] = [];
}
