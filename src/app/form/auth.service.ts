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
        name:"lehanga"
      },
      {
        id:1,
        name:"kurti"
      },
      {
        id:2,
        name:"shoes"
      },
      {
        id:2,
        name:"jackets"
      }
    ]
  }
}
