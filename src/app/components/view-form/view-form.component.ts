import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BytesPipe } from '../../bytes.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-view-form',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BytesPipe,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    FloatLabelModule,
    CardModule,
    DragDropModule,],
  templateUrl: './view-form.component.html',
  styleUrl: './view-form.component.css'
})
export class ViewFormComponent {

  public dummy_inputTypes: any;
  public minputTypes: any;
  public minputType: any;
  public select_inputType: any;
  public form_id: any;
  public blog: any = {};
  public blogs: any[] = [];
  constructor(
    private route: ActivatedRoute,) {}
  ngOnInit(): void {    
    this.route.params.subscribe((params) => {
      this.form_id = params["form_id"];
    });
    let formsList: any[] = [];
    let formsData = localStorage.getItem('forms')!;
    if (formsData !== null) {
      formsList = JSON.parse(formsData);
      formsList.forEach((val: any) => {
        this.blogs.push(val);
      });
      this.blog = this.blogs[this.form_id];
    }
    console.log(this.blog);
    this.dummy_inputTypes = [
      'Input',
      'Textarea',
      'Select',
      'Radio',
      'Checkbox',
    ];
    this.minputType = {};
    this.createnewinputTypes();
  }
  
  createnewinputTypes() {
    this.minputTypes = [
      {
        name: 'Input',
        value: 1,
        label: '',
        type: false,
        typeVal: 4,
        active: true,
        required: true,
        data: '',
        feilds: [
          {
            type: 4,
            typeVal: false,
            name: 'Numeric',
            value: false,
          },
        ],
      },
      {
        name: 'Textarea',
        value: 2,
        label: '',
        typeVal: 2,
        type: false,
        active: true,
        required: true,
        data: '',
        feilds: [],
      },
      {
        name: 'Select',
        value: 3,
        label: '',
        type: true,
        typeVal: 1,
        active: true,
        required: true,
        data: '',
        feilds: [],
      },
      {
        name: 'Radio',
        value: 4,
        label: '',
        type: true,
        typeVal: 1,
        active: true,
        required: true,
        data: '',
        feilds: [],
      },
      {
        name: 'Checkbox',
        value: 5,
        label: '',
        type: true,
        typeVal: 1,
        active: false,
        required: true,
        data: '',
        feilds: [],
      },
    ];
  }
  elementDefine(id1: any) {
    let newInput: any;
    if (this.blog.forms[id1].inputType == 'Input') {
      newInput = {
        name: 'Input',
        value: 1,
        label: '',
        type: false,
        typeVal: 4,
        numeric: false,
        email: false,
        mobile: false,
        calender: false,
        active: true,
        required: true,
        data: '',
        model:
          'form_' +
          (id1 + 1) +
          '_' +
          'Input' +
          '_' +
          (this.blog.forms[id1].inputTypes.length + 1),
        feilds: [],
      };
    } else if (this.blog.forms[id1].inputType == 'Textarea') {
      newInput = {
        name: 'Textarea',
        value: 2,
        label: '',
        typeVal: 2,
        type: false,
        numeric: false,
        email: false,
        mobile: false,
        calender: false,
        active: true,
        required: true,
        data: '',
        feilds: [],
        model:
          'form_' +
          (id1 + 1) +
          '_' +
          'Textarea' +
          '_' +
          (this.blog.forms[id1].inputTypes.length + 1),
      };
    } else if (this.blog.forms[id1].inputType == 'Select') {
      newInput = {
        name: 'Select',
        value: 3,
        label: '',
        type: true,
        typeVal: 1,
        numeric: false,
        email: false,
        mobile: false,
        calender: false,
        active: true,
        required: true,
        data: '',
        feilds: [],
        model:
          'form_' +
          (id1 + 1) +
          '_' +
          'Select' +
          '_' +
          (this.blog.forms[id1].inputTypes.length + 1),
      };
    } else if (this.blog.forms[id1].inputType == 'Radio') {
      newInput = {
        name: 'Radio',
        value: 4,
        label: '',
        type: true,
        typeVal: 1,
        numeric: false,
        email: false,
        mobile: false,
        calender: false,
        active: true,
        required: true,
        data: '',
        feilds: [],
        model:
          'form_' +
          (id1 + 1) +
          '_' +
          'Radio' +
          '_' +
          (this.blog.forms[id1].inputTypes.length + 1),
      };
    } else if (this.blog.forms[id1].inputType == 'Checkbox') {
      newInput = {
        name: 'Checkbox',
        value: 5,
        label: '',
        type: true,
        typeVal: 1,
        numeric: false,
        email: false,
        mobile: false,
        calender: false,
        active: true,
        required: true,
        data: '',
        feilds: [],
        model:
          'form_' +
          (id1 + 1) +
          '_' +
          'Checkbox' +
          '_' +
          (this.blog.forms[id1].inputTypes.length + 1),
      };
    }
    //newInput = this.minputTypes[this.dummy_inputTypes.indexOf(this.blog.forms[id1].inputType)];
    //newInput.data = "";
    //newInput.model = "form_" + (id1 + 1) + "_" + newInput.name + "_" + (this.blog.forms[id1].inputTypes.length + 1);
    //console.log(newInput);
    this.blog.forms[id1].inputTypes.push(newInput);
    if (newInput.type) {
      this.eleLableAdd(id1, this.blog.forms[id1].inputTypes.length - 1);
    }
    setTimeout(() => {
      this.blog.forms[id1].inputType = '';
    }, 500);
  }
  eleLableAdd(id1: any, id2: any) {
    let newFeilds = {
      name: '',
      value: '',
      active: true,
    };
    this.blog.forms[id1].inputTypes[id2].feilds.push(newFeilds);
    //console.log(this.blog.forms[id1].inputTypes[id2]);
    setTimeout(() => {
      this.createnewinputTypes();
    }, 1000);
  }
  drop(event: CdkDragDrop<any[]>) {
    //console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  onNoClick(): void {
    this.blogs[this.form_id] = this.blog;
    localStorage.setItem('forms', JSON.stringify(this.blogs));
  }
}
