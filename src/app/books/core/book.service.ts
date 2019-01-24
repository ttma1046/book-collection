import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '@book-collection/books/models/book';
import { BookCollectionState } from '@book-collection/books/models/bookCollectionState';

export const initialState: BookCollectionState = {
  books: []
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private stateSubject: BehaviorSubject<BookCollectionState> =
    new BehaviorSubject(initialState);
  bookCollection$: Observable<BookCollectionState> = this.stateSubject.asObservable();

  addBook(book: Book) {
    let state: BookCollectionState = this.stateSubject.value;

    state = {
      ...state,
      books: [ ...state.books, book ]
    };

    this.stateSubject.next(state);
  }
}
