import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { MaterialModule } from '@book-collection/material';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Book } from '@book-collection/books/models/book';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value in the title input box', () => {
    component.title.setValue('Harry Potter');

    const input = fixture.nativeElement.querySelector('input#title');

    expect(input.value).toBe('Harry Potter');
  });

  it('should update formGroup title input box', () => {
    component.bookForm.controls['title'].setValue('Harry Potter');

    const input = fixture.nativeElement.querySelector('input#title');

    expect(input.value).toBe('Harry Potter');
  });

  it('should update the value in the description input box', () => {
    component.bookForm.controls['description'].setValue('Description');

    const textarea = fixture.nativeElement.querySelector('textarea#description');

    expect(textarea.value).toBe('Description');
  });

  it('raises the addBook event when submit button clicked', () => {
    const book: Book = { title: 'Test', category: 'drama', description: 'test' };
    component.bookForm.patchValue(book);

    component.addBook.subscribe(newBook => expect(newBook).toEqual(book));
    component.onFormSubmit();
  });
});
