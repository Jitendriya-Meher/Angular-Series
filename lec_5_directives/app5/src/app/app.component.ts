import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgComponentOutlet, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutpageComponent,HomepageComponent,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app5';

  currpage:string = "home";

}
