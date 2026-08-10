import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

  onSubmit(){
    console.log('Form submitted');
  }
}
