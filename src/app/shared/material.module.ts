import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const matModule = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTreeModule,
  MatMenuModule,
  MatButtonModule,
];

@NgModule({
  imports: [matModule],
  exports: [matModule],
  // providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class MaterialModule {}
