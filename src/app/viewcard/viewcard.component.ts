import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcard',
  templateUrl: './viewcard.component.html',
  styleUrls: ['./viewcard.component.scss']
})
export class ViewcardComponent {

  producturl='https://api.sampleapis.com/movies/mystery'
  viewproducatData:any
  constructor(public apicall:ApiCallService,public active:ActivatedRoute){}

  ngOnInit(){
    this.active.paramMap.forEach(ele=>{
      let url=this.producturl+'/'+ele.get("id")
     
      this.apicall.getProduct(url).subscribe(res=>{
        this.viewproducatData=res
        console.log(this.viewproducatData);
    })
  })
}}
