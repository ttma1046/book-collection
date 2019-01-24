import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CollectionComponent } from '@book-collection/books/containers/collection/collection.component';
import { BookListComponent } from '@book-collection/books/components/book-list/book-list.component';
import { AddBookComponent } from '@book-collection/books/components/add-book/add-book.component';
import { MaterialModule } from '@book-collection/material';
import { BookComponent } from '@book-collection/books/components/book/book.component';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CollectionComponent,
        BookListComponent,
        BookComponent,
        AddBookComponent
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
