import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [AppMaterialModule, CommonModule, FormsModule, ReactiveFormsModule, TranslateModule.forChild()],
  exports: [AppMaterialModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
