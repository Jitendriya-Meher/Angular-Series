import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbodyfooterModule } from './navbodyfooter/navbodyfooter.module';
import { NavbarComponent } from './navbodyfooter/navbar/navbar.component';
import { FooterComponent } from './navbodyfooter/footer/footer.component';
import { BodyComponent } from './navbodyfooter/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app4';
}
