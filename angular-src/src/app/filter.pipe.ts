import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(businesses: any, businessName?: any): any {
   //check if search is undefined
   if(businessName===undefined) return businesses;
   // return the updated businessName array
   return businesses.filter(function(names){
     return names.name.toLowerCase().includes(businessName.toLowerCase())
   })
  }

}
