import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';

const matModule = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTreeModule,
  MatMenuModule,
];

@NgModule({
  imports: [matModule],
  exports: [matModule],
  // providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class MaterialModule {}
