import { forwardRef, Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildFormComponent),// Permite que el componente funcione como un control de formulario
      multi: true
    }
  ]
})
export class ChildFormComponent implements ControlValueAccessor {
  @Input() professionControl: FormControl = new FormControl(); // Recibe un FormControl desde el componente padre
  @Output() professionChange = new EventEmitter<string>();// Emite cambios en la profesión

  private onChange: (value: string) => void = () => {}; // Función para manejar cambios en el valor
  private onTouched: () => void = () => {}; // Función para manejar el estado de tocado

// Se llama cuando el formulario necesita escribir un valor en el control
  writeValue(value: string): void {
    if (value !== undefined) {
      this.professionControl.setValue(value);
    }
  }

// Se llama para registrar la función que debe llamarse cuando el valor cambia
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
    this.professionControl.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

// Se llama para registrar la función que debe llamarse cuando el control es tocado
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
//el método setDisabledState asegura que el control de selección de profesión responda adecuadamente cuando se deshabilite o habilite desde el formulario
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.professionControl.disable();
    } else {
      this.professionControl.enable();
    }
  }
 // Manejo del evento de cambio en el campo de entrada

  onProfessionChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.professionControl.setValue(value); // Actualiza el FormControl
    this.onChange(value); // Llama a la función de onChange
    this.professionChange.emit(value); // Emite el evento
  }
}
