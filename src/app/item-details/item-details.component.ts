import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  id?: number;
  contentItem?: IContent;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService){

  }

  ngOnInit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getItem(this.id).subscribe(content =>{this.contentItem = content});
  }
}
