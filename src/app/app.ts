import { Component } from '@angular/core';
import { CustomDropdown } from './components/custom-dropdown/custom-dropdown';
import { DROPDOWN_OPTIONS } from './constants/dropdown-options.constant';

@Component({
  selector: 'app-root',
  imports: [CustomDropdown],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Opzioni mostrate nel dropdown.
  options = DROPDOWN_OPTIONS;
}
