import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: string): any {
    // if (value.length === 0 || searchTerm === '') {
    //   return value;
    // }

    // const users= [];
    // for (const user of value){
    //   if(user['name']===searchTerm){
    //     users.push(user);
    //   }
    // }
    // return users;
  return value.filter(function(search: { country: string; }){
    return search.country.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  })
  }
}
