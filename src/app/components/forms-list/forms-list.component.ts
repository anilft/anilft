import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-forms-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    RouterModule,
    ButtonModule,
    HttpClientModule,
    CardModule
  ],
  templateUrl: './forms-list.component.html',
  styleUrl: './forms-list.component.css',
})
export class FormsListComponent {
  dataList!: any[];

  constructor() {}
  ngOnInit(): void {
    this.dataList = [
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
      { name: 'Item 1', created_date: new Date('2023-07-01'), status: 'Active' },
      { name: 'Item 2', created_date: new Date('2023-07-02'), status: 'Inactive' },
      { name: 'Item 3', created_date: new Date('2023-07-03'), status: 'Active' },
    ];
  }

  first = 0;

  rows = 10;
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.dataList ? this.first === this.dataList.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.dataList ? this.first === 0 : true;
  }
}
