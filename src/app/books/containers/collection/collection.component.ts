import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BookService } from '@book-collection/books/core/book.service';

@Component({
  selector: 'bc-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent {
  constructor(public bookService: BookService) {
  }
}
