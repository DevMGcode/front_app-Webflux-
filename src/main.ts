import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import{ChildFormComponent} from './app/components/child-form/child-form.component'
import{ParentFormComponent} from './app/components/parent-form/parent-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { PruebaComponent } from './app/components/prueba/prueba.component';
import { PlantillasComponent } from './app/components/plantillas/plantillas.component';
import { FormupruebaService } from './app/services/formuprueba.service'
bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));

  