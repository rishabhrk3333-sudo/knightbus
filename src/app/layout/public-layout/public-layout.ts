import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-public-layout',
  imports: [Header,Footer,RouterOutlet,],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {

  onSignIn(){
    
  }
}
