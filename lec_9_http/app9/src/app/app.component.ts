import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app9';

  userPost:any = [];

  constructor(private user:UsersService){
    this.user.getUsersData().subscribe((data) => {
      console.log(data);
      this.userPost = data;
    })

    console.log("users POST",this.userPost);
  }
}
