import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
   contentArray: IContent[];

   constructor(private pokemonService: PokemonService){
    this.contentArray = [];
  }

  ngOnInit(){
    this.pokemonService.getContent().subscribe(content => this.contentArray = content);
  }
}
