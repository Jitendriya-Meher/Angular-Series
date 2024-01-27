import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mycart',
  standalone: true,
  imports: [],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.css'
})
export class MycartComponent {
  @Input() user:any
}
