import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-locais',
  templateUrl: './table-locais.component.html',
  styleUrls: ['./table-locais.component.css']
})
export class TableLocaisComponent implements OnInit {

  locais?: String[];

  constructor() { }

  ngOnInit(): void {
  }

}
