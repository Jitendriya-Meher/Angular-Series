import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { MywebpagebodyComponent } from './mywebpagebody/mywebpagebody.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyfooterComponent,MynavbarComponent,MywebpagebodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
