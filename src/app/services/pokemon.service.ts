import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../data/mock-content-db';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getContent(): Observable<IContent[]>{
    return of(CONTENT);
  }

  getItem(id: number):Observable<IContent>|undefined{
    let index = CONTENT.findIndex(element => element.id === id);
    let content:IContent = CONTENT[index];
    return of(content);
  }

  insertItem(content: IContent): Observable<IContent[]>{
    CONTENT.push(content);
    return of(CONTENT);
  }

  updateItem(content: IContent): Observable<IContent[]>{
    let index = CONTENT.findIndex(element => element.id === content.id);
    CONTENT[index] = content;
    return of(CONTENT);
  }

  deleteItem(id: number): Observable<IContent>|undefined{
    let index = CONTENT.findIndex(element => element.id === id);
    let content:IContent = CONTENT[index];
    CONTENT.splice(index, 1);
    return of(content);
  }
}
