import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css'
})
export class AboutpageComponent {
  userdata = [
    {
      name:"jiten",
      age:21
    },
    {
      name:"amit",
      age:21
    },
    {
      name:"abcd",
      age:121
    }
  ]
}
