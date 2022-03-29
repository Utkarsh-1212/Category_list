import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  searchText: string = '';
  players: any[] = [
    { id: 1, name: 'Virat kohli', country: 'India'},
    { id: 2, name: "Glen Maxwell", country: 'Australia'},
    { id: 3, name: "Ms Dhoni", country: 'India'},
    { id: 4, name: "Ben Stokes", country: 'England'},
    { id: 5, name: "Steve Smith", country: 'Australia'},
    { id: 6, name: "Dale stayn", country: 'Africa'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
