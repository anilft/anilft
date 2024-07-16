import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    RatingModule,
    TagModule,
    RouterModule,
    ButtonModule,
    HttpClientModule,
    CardModule],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {
  dataList!: any[];
  first = 0;
  rows = 10;

  constructor() {}
  ngOnInit(): void {
    this.dataList = [
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 1',
        created_date: new Date('2023-07-01'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 2',
        created_date: new Date('2023-07-02'),
        status: 'Inactive',
        email: 'email@12.comve',
        mobile: '9999999999',
        events: 2,
      },
      {
        name: 'Item 3',
        created_date: new Date('2023-07-03'),
        status: 'Active',
        email: 'email@12.com',
        mobile: '9999999999',
        events: 2,
      },
    ];
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  getSeverity(status: string) {
    switch (status) {
      case 'Inactive':
        return 'danger';

      case 'Active':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      default:
        return 'warning';
    }
  }
}
