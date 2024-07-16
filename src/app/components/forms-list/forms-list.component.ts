import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';

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
    CardModule,
    ToggleButtonModule
  ],
  templateUrl: './forms-list.component.html',
  styleUrl: './forms-list.component.css',
})
export class FormsListComponent {
  dataList!: any[];
  first = 0;
  rows = 10;

  constructor() {}
  ngOnInit(): void {
    this.dataList = [];
    let formsList: any[] = [];
    let formsData = localStorage.getItem('forms')!;
    if (formsData !== null) {
      formsList = JSON.parse(formsData);
      formsList.forEach((val: any) => {
        val.forms.forEach((val1: any) => {
          this.dataList.push(val1);
        });
      });
    }
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
