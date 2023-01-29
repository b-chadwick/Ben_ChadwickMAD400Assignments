import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
   contentArray: IContent[];

   constructor(){
    this.contentArray = [{
      id: 1,
      name: "Bulbasaur",
      description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      author: "Ben",
      imgSrc: "assets/imgs/001Bulbasaur.png", 
      type: "Grass/Poison"
    },
    {
      id: 4,
      name: "Charmander",
      description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      author: "Ben",
      imgSrc: "assets/imgs/004Charmander.png", 
      type: "Fire"
    },
    {
      id: 7,
      name: "Squirtle",
      description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      author: "Ben",
      imgSrc: "assets/imgs/007Squirtle.png", 
      type: "Water"
    },
    {
      id: 25,
      name: "Pikachu",
      description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
      author: "Ben",
      imgSrc: "assets/imgs/025Pikachu.png", 
      type: "Electric"
    }];
  }
}
