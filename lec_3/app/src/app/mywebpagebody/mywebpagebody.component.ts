import { Component } from '@angular/core';

@Component({
  selector: 'app-mywebpagebody',
  standalone: true,
  imports: [],
  templateUrl: './mywebpagebody.component.html',
  styleUrl: './mywebpagebody.component.css'
})
export class MywebpagebodyComponent {
  name= "Jitendriya Meher"

  myfunc(x:string){
    return "Hello " + x
  }

  myobj = {
    username: 'ji10',
    age:22 
  }

  myarr:number[] = [1,2,3,4,5,6,7,8]
}
