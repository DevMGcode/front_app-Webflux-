import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { FormupruebaService } from '../../services/formuprueba.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'

})

export class PruebaComponent {
  name: string = '';
  age: number | null = null;
  submittedData: any;

  constructor(private FormupruebaService: FormupruebaService) {}


  onSubmit() {
    if (this.validateForm()) {
      this.submittedData = { name: this.name, age: this.age };
      this.FormupruebaService.updateFormData(this.submittedData);
      //  SweetAlert2
      Swal.fire({
        title: 'Datos Enviados',
        html: `<p><strong>Nombre:</strong> ${this.name}</p><p><strong>Edad:</strong> ${this.age}</p>`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

    }
  }

  validateForm(): boolean {
    /* if (this.name !== this.name.toLowerCase()) {
      alert('el nombre debe ser en minusculas.');
      return false; */

    if (this.name !== this.name.toLowerCase()) {
      Swal.fire({
        title: 'Error',
        text: 'El nombre debe estar en minúsculas.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;

    }
    if (this.age === null || this.age < 19) {
      // Usa SweetAlert2 para mostrar el error
      Swal.fire({
        title: 'Error',
        text: 'La edad debe ser mayor de 18 años.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
    return true;
  }
}

