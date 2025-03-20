import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-detail/recipe-item/recipe-item.component';

@NgModule({
  declarations: [RecipeBookComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent],
  imports: [CommonModule],
  exports: [RecipeBookComponent],
})
export class RecipeBookModule {}
