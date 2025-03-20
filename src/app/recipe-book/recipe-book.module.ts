import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';

@NgModule({
  declarations: [RecipeBookComponent],
  imports: [CommonModule],
  exports: [RecipeBookComponent],
})
export class RecipeBookModule {}
