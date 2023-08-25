import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a Test Recipe', 'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1519/MLMC-Baked-Stuffed-Lobster-Pancetta-Artichokes1624-1-scaled-850x850-c.jpg')
  ];

  constructor(){

  }

  ngOnInit(): void {

  }
}
