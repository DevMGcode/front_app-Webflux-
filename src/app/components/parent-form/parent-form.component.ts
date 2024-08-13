import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildFormComponent } from '../child-form/child-form.component'; // se importa el componente hijo


@Component({
  selector: 'app-parent-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChildFormComponent],
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent {
  form: FormGroup; // Importa el componente hijo
  submittedData: any; // Almacena los datos enviados

  constructor(private fb: FormBuilder) {
    // Crea un FormGroup con dos controles: parentName y childProfession
    this.form = this.fb.group({
      parentName: ['', [Validators.required]], // Control para el nombre del padre con validación requerida
      childProfession: ['', [Validators.required]] // Control para la profesión del hijo con validación requerida
    });
  }
  // Obtiene el FormControl para la profesión del hijo
  get childProfessionControl(): FormControl {
    return this.form.get('childProfession') as FormControl;
  }

  // Maneja el cambio en la profesión del hijo
  onProfessionChange(profession: string) {
    console.log('Profesión cambiada:', profession);
  }

  // Maneja el envío del formulario
  onSubmit() {
    if (this.form.valid) {
      this.submittedData = this.form.value;
    }
  }
}
