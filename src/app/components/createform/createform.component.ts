import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../../services.service';
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
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-createform',
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
    DragDropModule,
    ButtonModule,
    FloatLabelModule,
    CardModule,
  ],
  templateUrl: './createform.component.html',
  styleUrl: './createform.component.css',
})
export class CreateformComponent {
  public dummy_inputTypes: any;
  public minputTypes: any;
  public minputType: any;
  public select_inputType: any;
  public blog: any = {};
  public blogs: any[] = [];
  public selectedElement: any;
  constructor() {}
  ngOnInit(): void {
    let formsList: any[] = [];
    let formsData = localStorage.getItem('forms')!;
    if (formsData !== null) {
      formsList = JSON.parse(formsData);
      formsList.forEach((val: any) => {
        this.blogs.push(val);
      });
    }
    this.blog = {
      userid: '',
      status: true,
      admin: false,
      name: '',
      forms: [],
    };
    this.dummy_inputTypes = [
      'Input',
      'Textarea',
      'Select',
      'Radio',
      'Checkbox',
    ];
    this.minputType = {};
    this.createnewinputTypes();
    this.createFormAdd();
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
  onNoClick(): void {
    this.blogs.push(this.blog);
    localStorage.setItem('forms', JSON.stringify(this.blogs));
  }
  createFormAdd() {
    let newForm = {
      name: '',
      inputType: '',
      inputTypes: [],
      status: true,
      blog_profile: false,
      contact: false,
    };
    this.blog.forms.push(newForm);
  }

  drop(event: CdkDragDrop<any[]>) {
    //console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  onSubmit(): void {}
}
