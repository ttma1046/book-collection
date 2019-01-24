import { Component, Input } from '@angular/core';
import { Book } from '@book-collection/books/models/book';

@Component({
  selector: 'bc-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;

  get title() {
    return this.book ? this.book.title : '';
  }

  get category() {
    return this.book ? this.book.category : '';
  }

  get description() {
    return this.book ? this.book.description : '';
  }
}
