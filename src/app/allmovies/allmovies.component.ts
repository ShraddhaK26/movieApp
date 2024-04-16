import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent {
producturl='https://api.sampleapis.com/movies/mystery'
allData:any

constructor(private apicall:ApiCallService){}

ngOnInit(){
  this.GetData();
}

async GetData(){
this.allData=await this.apicall.getProduct(this.producturl).toPromise()
console.log(this.allData);

}
}
