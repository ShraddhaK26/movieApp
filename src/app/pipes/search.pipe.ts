import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Data: any, searchData: any): any {
    
    if (!searchData) {
      return Data
    }
   let searchData1=searchData.toLowerCase()

   if (searchData) {
    return Data.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(searchData1)

    })
   }
  }

}
