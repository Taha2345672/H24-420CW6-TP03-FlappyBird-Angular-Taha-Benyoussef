import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RegisterDTO } from '../models/RegisterDTO';


@Injectable({
  providedIn: 'root'
})
export class FlappyBirdService {

constructor(public http: HttpClient) { }
async registerUser(username: string, email: string, password: string, passwordConfirm:string){
  let registerDTO: RegisterDTO= new RegisterDTO(0,username,email,password,passwordConfirm);
  console.log(registerDTO)
  let response = await lastValueFrom(this.http.post<RegisterDTO> ("https://localhost:7075/api/Users/Register", registerDTO));
  console.log(response);



}


}
