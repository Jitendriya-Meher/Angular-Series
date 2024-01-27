import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycartComponent } from './mycart/mycart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,MycartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app6';

  userData = [
    {
      name:'amit',
      age:21
    },
    {
      name:'jiten',
      age:123
    },
    {
      name:'jitendriya',
      age:345
    },
    {
      name:'ji10',
      age:121
    }
  ]
}
