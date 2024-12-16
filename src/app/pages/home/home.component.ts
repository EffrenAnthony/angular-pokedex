import { Component } from '@angular/core';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonInputComponent } from '../../components/pokemon-input/pokemon-input.component';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonApiResponse, PokemonDisplay } from '../../types';

@Component({
  selector: 'app-home',
  imports: [PokemonListComponent, PokemonInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public pokemons: PokemonDisplay[] = [];
  public filteredPokemons = this.pokemons;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemons(151)
      .subscribe((response: PokemonApiResponse) => {
        this.pokemons = response.results.map((pokemon: Pokemon) => {
          const urlParts = pokemon.url.split('/');
          const id = urlParts[urlParts.length - 2];
          return {
            ...pokemon,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            // image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
          };
        });
        this.filteredPokemons = this.pokemons;
      });
  }
  onSearchPokemon(pokemonName: string) {
    this.filteredPokemons = this.pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
  }
}
