import { Component, input, signal } from '@angular/core';
import { DropdownOption } from '../../models/dropdown-option.model';

@Component({
  selector: 'app-custom-dropdown',
  imports: [],
  templateUrl: './custom-dropdown.html',
  styleUrl: './custom-dropdown.css',
})
export class CustomDropdown {
  // Ricevo dal componente padre le opzioni del dropdown.
  options = input.required<DropdownOption[]>();

  // Indica se il dropdown è aperto oppure chiuso.
  isOpen = signal(false);

  // Salvo l'opzione selezionata.
  selectedOption = signal<DropdownOption | null>(null);

  // Apro o chiudo il dropdown.
  toggleDropdown() {
    this.isOpen.update((open) => !open);
  }

  // Seleziono un'opzione.
  selectOption(option: DropdownOption) {
    this.selectedOption.set(option);

    // Chiudo il dropdown dopo la selezione.
    this.isOpen.set(false);
  }
}
