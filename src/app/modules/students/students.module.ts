import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../shared/student.service';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StudentComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule { }
