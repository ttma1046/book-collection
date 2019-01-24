import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
