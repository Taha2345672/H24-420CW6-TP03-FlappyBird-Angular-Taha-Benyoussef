import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlappyBirdService } from '../services/FlappyBird.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  registerUsername : string = "";
  registerEmail : string = "";
  registerPassword : string = "";
  registerPasswordConfirm : string = "";

  loginUsername : string = "";
  loginPassword : string = "";

  constructor(public route : Router,public flappyService:FlappyBirdService,public http :HttpClient) { }

  ngOnInit() {
  }

  login(){


    // Redirection si la connexion a réussi :
    this.route.navigate(["/play"]);
  }

  register(){
    this.flappyService.registerUser(this.registerUsername, this.registerEmail, this.registerPassword, this.registerPasswordConfirm)

  }

}
