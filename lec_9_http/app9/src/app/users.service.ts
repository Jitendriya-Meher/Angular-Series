import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  constructor(private http : HttpClient) {
  }

  getUsersData(){
    let url:any = `https://jsonplaceholder.typicode.com/photos`;

    return this.http.get(url);
  }
}
