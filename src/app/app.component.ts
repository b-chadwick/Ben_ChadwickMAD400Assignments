import { isNgContent } from '@angular/compiler';
import { Component } from '@angular/core';
import { IContent } from './models/icontent';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B_Chadwick_Pokemon';
  contentItem: IContent | undefined;
  constructor(private pokemonService: PokemonService){
    pokemonService.getItem(4)?.subscribe(content=> this.contentItem = content);
  }
  
}
