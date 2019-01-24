import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '@book-collection/books/models/book';

@Component({
  selector: 'bc-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  @Output() addBook: EventEmitter<Book> = new EventEmitter<Book>();
  @ViewChild('formDirective') ngFormVar;
  bookForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.bookForm = fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get title() {
    return this.bookForm.get('title');
  }

  get category() {
    return this.bookForm.get('category');
  }

  get description() {
    return this.bookForm.get('description');
  }

  get titleErrorMessage() {
    return this.title.hasError('required') ? 'You must enter the title' :
        this.title.hasError('maxlength') ? 'Max Length 30' :
            '';
  }

  get categoryErrorMessage() {
    return this.category.hasError('required') ? 'You must select a category' : '';
  }

  get descriptionErrorMessage() {
    return this.description.hasError('required') ? 'You must enter the description' : '';
  }

  onFormSubmit() {
    if (this.bookForm.valid) {
      const newBook = this.prepareBook(this.bookForm.value);
      this.addBook.emit(newBook);
      this.ngFormVar.resetForm();
      this.bookForm.reset();
    }
  }

  private prepareBook(formValue): Book {
    const book: Book = {
        ...formValue
    };

    return book;
  }
}
