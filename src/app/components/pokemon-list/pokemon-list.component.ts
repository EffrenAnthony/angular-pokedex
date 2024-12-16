import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonApiResponse, PokemonDisplay } from '../../types';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonItemComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() public pokemons: PokemonDisplay[] = [];


}
