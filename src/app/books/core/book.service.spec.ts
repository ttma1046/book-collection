import { TestBed } from '@angular/core/testing';

import { BookService, initialState } from '@book-collection/books/core/book.service';
import { Book } from '@book-collection/books/models/book';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('#get bookCollection$ should return value from observable',
    (done: DoneFn) => {
      const service: BookService = TestBed.get(BookService);
      service.bookCollection$.subscribe(value => {
        expect(value).toBe(initialState);
        done();
      });
    }
  );

  it('#addBook should add a book to the state and bookCollection return value from state',
    (done: DoneFn) => {
      const service: BookService = TestBed.get(BookService);

      const fakeBook: Book = { title: 'test', category: 'test', description: 'test' };
      service.addBook(fakeBook);

      const state = {
        ...initialState,
        books: [ ...initialState.books, fakeBook ]
      };

      service.bookCollection$.subscribe(value => {
        expect(value).toEqual(state);
        done();
      });
    }
  );
});
