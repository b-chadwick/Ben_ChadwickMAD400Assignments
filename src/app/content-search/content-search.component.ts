import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent {
  contentItem: IContent | undefined;

  constructor(private pokemonService: PokemonService){
    this.contentItem = undefined;
  }

  ngOnInit(){
    this.pokemonService.getItem(4)?.subscribe(content=> this.contentItem = content);
  }
}
