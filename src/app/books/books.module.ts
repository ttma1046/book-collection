import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddBookComponent } from '@book-collection/books/components/add-book/add-book.component';
import { BookListComponent } from '@book-collection/books/components/book-list/book-list.component';
import { CollectionComponent } from '@book-collection/books/containers/collection/collection.component';

import { BooksRoutingModule } from '@book-collection/books/books-routing.module';
import { BookComponent } from '@book-collection/books/components/book/book.component';
import { MaterialModule } from '@book-collection/material';

@NgModule({
  declarations: [
    AddBookComponent,
    BookListComponent,
    CollectionComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BooksRoutingModule
  ],
  exports: [ CollectionComponent ]
})
export class BooksModule { }
