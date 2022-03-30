import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
// interface Dress {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private auth: AuthService) {}

  categ: any = [ 'Woman', 'Man', 'Kids'];
  subcateg: any =[];
  woman: any = ['Lehanga', 'Kurti', 'Sarees'];
  man: any = ['Jackets', 'Shoes', 'Watches', 'Trousers'];
  kids: any = ['Clothes', 'Toys', 'Caps'];
  ngOnInit() {

  }

  onSelect(categ: any) {
    // this.subcategory = this.auth
    //   .subcategory()
    //   .filter((e) => e.id == categ.target.value);
    switch (categ){
      case 'Woman':
      this.subcateg = this.woman;
      break;
      case 'Man':
      this.subcateg = this.man;
      break;
      case 'Kids':
      this.subcateg = this.kids;
      break;
    }
  }

  // foods: Dress[] = [
  //   {value: 'shoes-0', viewValue: 'Shoes'},
  //   {value: 'jaacket-1', viewValue: 'Jacket'},
  //   {value: 'watches-2', viewValue: 'Watches'},
  // ];
  // onSubmit(){
  //   console.log("submited");

  // }
}
