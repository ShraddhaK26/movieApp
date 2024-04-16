import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent {
  loginform!:FormGroup
  endPonits='posts'

  constructor(private fb:FormBuilder,public apicall:ApiService){}
  
  ngOnInit(){
  this.getData()
  }
  
  getData(){
    this.loginform=this.fb.group({
      username:[],
      contact:[],
      add:[],
      age:[],
      pin:[]
    })
  
  }

  submit(){
this.apicall.postApiCall(this.endPonits,this.loginform.value).subscribe(res=>{
  console.log(res);
  if (res) {
    alert("Your Booking SucessFully....!!!!!")
  }
  
})
  }
}
