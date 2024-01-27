import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  cnt:number = 0;

  clickstatus:string = 'Click the button below';

  boxDisabled:boolean = (this.cnt == 0 ) ? true : false;

  btnClick(){
    this.cnt = this.cnt + 1;
    this.clickstatus = `don't click button was clicked ${this.cnt} times`;
    this.boxDisabled = (this.cnt == 0 ) ? true : false;
  }

  btnClickdec(){
    this.cnt = this.cnt - 1;
    this.clickstatus = `click button was clicked ${this.cnt} times`;
    this.boxDisabled = (this.cnt == 0 ) ? true : false;
  }

  restart(){
    this.cnt = 0;
    this.clickstatus = 'RESTARTED';
    this.boxDisabled = (this.cnt == 0 ) ? true : false;
  }

  result:any = 0;

  calcValue(solve:any){
    this.result = eval(solve);
  }

  

}
