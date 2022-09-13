import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MatModules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatIconModule,
  CommonModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [MatModules],
  exports: [MatModules],
})
export class SharedModule {}
