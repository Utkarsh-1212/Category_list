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
        name: 'woman',
      },
      {
        id: 2,
        name: 'man',
      },
      {
        id: 3,
        name: 'kids',
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
