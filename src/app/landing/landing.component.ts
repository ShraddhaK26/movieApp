import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  producturl='https://api.sampleapis.com/movies/mystery'
  allData:any=[]
  searchData:any
  
  constructor(private apicall:ApiCallService){}
  
  ngOnInit(){
    this.GetData();
  }
  
  async GetData(){
  this.allData=await this.apicall.getProduct(this.producturl).toPromise()
  console.log(this.allData);
  
  }
  

  
}
