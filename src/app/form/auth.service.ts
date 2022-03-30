import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  category() {
    return [
      {
        id: 1,
        name: 'Woman',
      },
      {
        id: 2,
        name: 'Man',
      },
      {
        id: 3,
        name: 'Kids',
      },
    ];
  }
  subcategory(){
    return [
      {
        id:1,
        name:"Lehanga"
      },
      {
        id:1,
        name:"Kurti"
      },
      {
        id:2,
        name:"Shoes"
      },
      {
        id:2,
        name:"Jackets"
      }
    ]
  }
}
