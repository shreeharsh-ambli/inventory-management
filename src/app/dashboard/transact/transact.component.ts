import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {
  transactionTypes = [
    {value: 'purchase', viewValue: 'Purchase'},
    {value: 'sale', viewValue: 'Sale'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
