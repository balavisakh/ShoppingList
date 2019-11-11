import { Recipe } from './../../models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A test Recipe','This is a simple test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
