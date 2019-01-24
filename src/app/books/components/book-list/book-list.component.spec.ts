import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from '@book-collection/books/components/book-list/book-list.component';
import { BookComponent } from '@book-collection/books/components/book/book.component';
import { MaterialModule } from '@book-collection/material';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        BookComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT have books before ngOnInit', () => {
    expect(component.books.length).toBe(0,
      'should not have books before ngOnInit');
  });

  it('should NOT have books immediately after ngOnInit', () => {
    fixture.detectChanges(); // runs initial lifecycle hooks

    expect(component.books.length).toBe(0,
      'should not have books until service observable returns');
  });
});
