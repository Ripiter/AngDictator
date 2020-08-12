import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Dictator } from '../dictator';

@Component({
  selector: 'app-dictator-form',
  templateUrl: './dictator-form.component.html',
  styleUrls: ['./dictator-form.component.css']
})
export class DictatorFormComponent implements OnInit {

  loginData:FormGroup;
  dictators : Dictator[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loginData = new FormGroup({
      Name: new FormControl(''),
      LastName: new FormControl(''),
      BirthDay: new FormControl(''),
      Death: new FormControl(''),
      Description: new FormControl('')
   });
  }

  onLoginSubmit(){
    let dictator = new Dictator();
    dictator.FirstName = this.loginData.get("Name").value;
    dictator.LastName = this.loginData.get("LastName").value;
    dictator.BirthDay = this.loginData.get("BirthDay").value;
    dictator.Death = this.loginData.get("Death").value;
    dictator.Description = this.loginData.get("Description").value;

    this.dictators.push(dictator);
  }
  onClickMe(dict : Dictator){
    const index: number = this.dictators.indexOf(dict);
    if (index !== -1) {
        this.dictators.splice(index, 1);
    } 

  }
}
