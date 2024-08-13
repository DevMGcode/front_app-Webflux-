import { Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';
import {ParentFormComponent} from './components/parent-form/parent-form.component';
import {PageNotFoundComponent} from'./components/page-not-found/page-not-found.component'

export const routes: Routes = [
  { path: '', component: PruebaComponent }, // Ruta por defecto
  { path: 'plantillas', component: PlantillasComponent },
  { path: 'parent', component: ParentFormComponent },
  { path: '**', component: PageNotFoundComponent }



];
