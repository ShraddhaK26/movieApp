import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpclient:HttpClient) { }

  getProduct(url: any) {
    return this.httpclient.get(url)
  }
}
