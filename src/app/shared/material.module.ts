import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatProgressBarModule, MatSortModule, MatTableModule, MatTooltipModule],
  exports: [MatButtonModule, MatIconModule, MatProgressBarModule, MatSortModule, MatTableModule, MatTooltipModule]
})
export class AppMaterialModule {}
