import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
  /* constructor(private router: Router) {}
  navigateHome(): void {
    this.router.navigate(['/']);
  } */

}
