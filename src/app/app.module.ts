import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shoppingListComponents/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shoppingListComponents/shopping-list-edit/shopping-list-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipeBookComponents/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBookComponents/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBookComponents/recipe-detail/recipe-detail.component';
import { RecipeListDetailComponent } from './recipeBookComponents/recipe-list-detail/recipe-list-detail.component';
import { RecipeComponent } from './recipeBookComponents/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
