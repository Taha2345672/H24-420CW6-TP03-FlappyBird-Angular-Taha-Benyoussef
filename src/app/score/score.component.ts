import { Component, OnInit } from '@angular/core';
import { FlappyBirdService } from '../services/FlappyBird.service';
import { Score } from '../models/Scores';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  myScores : Score[] = [];
  publicScores : Score[] = [];
  userIsConnected : boolean = false;

  constructor(public FlappyService:FlappyBirdService) { }

  async ngOnInit() {

    this.userIsConnected = sessionStorage.getItem("token") != null;
    
    this.userIsConnected = sessionStorage.getItem("token") != null;
    console.log(this.userIsConnected)

    this.publicScores = await this.FlappyService.getPublicScore();

    if (this.userIsConnected){
      this.myScores = await this.FlappyService.getMyScores();
    }

  }

  async changeScoreVisibility(score : Score){

    score = await this.FlappyService.ChangeScoreVisiblity(score ,!score.isPublic);


  }

}