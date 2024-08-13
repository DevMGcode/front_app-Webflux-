import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormupruebaService} from '../../services/formuprueba.service';
@Component({
  selector: 'app-plantillas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantillas.component.html',
  styleUrl: './plantillas.component.css'
})
export class PlantillasComponent implements OnInit{
  /* @Input() data: any; */
  data: any;

  constructor(private FormupruebaService: FormupruebaService) {}

  ngOnInit() {
    this.FormupruebaService.currentFormData.subscribe(data => {
      this.data = data;
    });
  }
}


