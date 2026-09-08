// Importo il tipo che definisce la struttura di ogni opzione.
import { DropdownOption } from '../models/dropdown-option.model';

// Costante che contiene le opzioni predefinite del dropdown. Uso il maiuscolo perché è una convenzione per distinguere le costanti dai valori che possono cambiare durante l'esecuzione dell'applicazione.
export const DROPDOWN_OPTIONS: DropdownOption[] = [
  { id: 1, label: 'First Item' },
  { id: 2, label: 'Second Item' },
  { id: 3, label: 'Third Item' },
  { id: 4, label: 'Fourth Item' },
  { id: 5, label: 'Fifth Item' },
];
