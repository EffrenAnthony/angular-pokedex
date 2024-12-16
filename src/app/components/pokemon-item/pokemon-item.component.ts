import { Component, Input } from '@angular/core';
import { PokemonDisplay } from '../../types';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-item',
  imports: [UpperCasePipe],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.scss'
})
export class PokemonItemComponent {
// pokemon input
  @Input() pokemon: PokemonDisplay = {
    name: '',
    image: '',
    url: ''
  }
}
