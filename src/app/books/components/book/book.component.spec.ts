import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from '@book-collection/books/components/book/book.component';
import { MaterialModule } from '@book-collection/material';
import { Book } from '@book-collection/books/models/book';
import { By } from '@angular/platform-browser';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let expectedBook: Book;
  let bookDebugElement: DebugElement;
  let bookElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    bookDebugElement  = fixture.debugElement.query(By.css('mat-card'));
    bookElement = bookDebugElement.nativeElement;

    expectedBook = { title: 'Test', category: 'Drama', description: 'description' };

    component.book = expectedBook;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book title in mat-card-title tag', () => {
    const expectedBookTitle = expectedBook.title;
    expect(bookElement.querySelector('mat-card-title').textContent).toContain(expectedBookTitle);
  });

  it('should display book category in mat-card-subtitle tag', () => {
    const expectedBookCategory = expectedBook.category;
    expect(bookElement.querySelector('mat-card-subtitle').textContent).toContain(expectedBookCategory);
  });

  it('should display book description in mat-card-content>p tag', () => {
    const expectedBookDescription = expectedBook.description;
    expect(bookElement.querySelector('mat-card-content>p').textContent).toContain(expectedBookDescription);
  });
});
