import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //made model so :
  recipes: Recipe[] = [
    //new obj
    new Recipe('a test', 'this is test', 'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'),
    new Recipe('a test', 'this is test', 'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
