import { Injectable,inject,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http=inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/pokemon';
  //reactive state management using using signals
  pokemonList = signal<any[]>([]);
  //method use for saving data
  savePokemon(data:any ){
  return this.http.post(this.apiUrl,data);
  }
  //method use for fetching data
  fetchPokemon(){
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.pokemonList.set(data));
  }
  
}

