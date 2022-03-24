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
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.states = this.auth.category() ;

  }
  states: any=[];
  subcategory: any=[];

  onSelect(states:any){
    this.subcategory =this.auth.subcategory().filter(e => e.id == states.target.value);


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
