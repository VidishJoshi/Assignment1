import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  allStudents: Student[];
  subject: string = "all subjects";

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.subject = "all subjects"
  }

  getAllStudents() {
    this.studentService.getAllStudents()
    .subscribe((data: Student[]) => {
      this.allStudents = data;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
    .subscribe((data: Student) => {
      this.getAllStudents();
    });
  }

  edit(stu) {
    this.studentService.currentStudent = Object.assign({}, stu);
  }

  sort(colName){
    this.allStudents.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
  }

}
