import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RegisterDTO } from '../models/RegisterDTO';
import { LoginDTO } from '../models/LoginDTO';
import { Score } from '../models/Scores';



@Injectable({
  providedIn: 'root'
})
export class FlappyBirdService {

  username : string = "";
  email : string = "";
  password : string = "";
  passwordConfirm : string = "";


constructor(public http: HttpClient) { }
async registerUser(){
  let registerDTO: RegisterDTO= new RegisterDTO(this.username,this.email,this.password,this.passwordConfirm);
  console.log(registerDTO)
  let q = await lastValueFrom(this.http.post<RegisterDTO> ("https://localhost:7075/api/Users/Register",registerDTO));
  console.log(q);



}

async getLogin(Username:string,Password:string){
let loginDTO = new LoginDTO (Username,Password);
console.log(loginDTO)
let x =await lastValueFrom(this.http.post<any>("https://localhost:7075/api/Users/Login",loginDTO));
console.log(x)
sessionStorage.setItem ("token", x.token)
sessionStorage.setItem ("loginUsername",Username)
return x;

}
async getPublicScore():Promise<Score[]>{
  let y = await lastValueFrom(this.http.get<Score[]> ("https://localhost:7075/api/Scores/GetPublicScores"));
  console.log(y);
  return y ;
}

async getMyScores():Promise<Score[]>{
  let z = await lastValueFrom(this.http.get<Score[]> ("http://localhost:7075/api/Scores/GetMyscores"));
  console.log(z);
  return z ;
}

async Postscore(pseudo : string | null, timeInSeconds : string ,scoreValue : number , isPublic : boolean){
  let newresponse = new Score (0, pseudo ,null,timeInSeconds,scoreValue,isPublic)
  let v = await lastValueFrom(this.http.post<Score> ("http://localhost:7075/api/Scores/PostScores", newresponse));
  console.log(v)
}
async ChangeScoreVisiblity (score : Score , Visiblity : boolean){
  score.isPublic = Visiblity;
  let w = await lastValueFrom(this.http.put<Score> ("http://localhost:7075/api/Scores/ChangeScoreVisiblity"+score.id,score));
console.log( w);
return w
}

}