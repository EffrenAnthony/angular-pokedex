import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-input',
  imports: [FormsModule],
  templateUrl: './pokemon-input.component.html',
  styleUrl: './pokemon-input.component.scss'
})
export class PokemonInputComponent {
  public inputValue: string = '';
  @Output() pokemonName: EventEmitter<string> = new EventEmitter<string>();

  onInputChange() {
    this.pokemonName.emit(this.inputValue);
  }
}
