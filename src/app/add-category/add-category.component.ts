import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category={
    title: '',
    description: '',

  }

  constructor() { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.category.title.trim()==''|| this.category.title==null){
      return
    }
  }

}
