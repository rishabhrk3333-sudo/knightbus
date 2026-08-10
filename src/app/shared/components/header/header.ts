import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);

  navigateTo(path:string) {
    this.router.navigate([path]);
  }

}
