import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url=' http://localhost:3000'
  constructor(private httpclient:HttpClient) { }

  postApiCall(endPoint:any,data:any){
    
    let url = this.url + '/' + endPoint;
   return this.httpclient.post(url,data)
  }
}
