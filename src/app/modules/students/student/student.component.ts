import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  allStudents: Student[];
  showDialog: boolean = false;

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  createAndUpdate(currentStudent: Student) {
    console.log(currentStudent);
    if(currentStudent.id != null) {
      this.showDialog = false;
      this.updateStudent(currentStudent);
    }
    else {
      this.showDialog = true;
    }
  }

  createStudent(stu: Student) {
    this.studentService.createStudent(stu).subscribe();
  }

  updateStudent(stu: Student) {
    this.studentService.updateStudent(stu).subscribe();
  }

  clear() {
    this.studentService.currentStudent = {
      id: null,
      name: null,
      email: null,
      birthdate: null,
      active: true,
      gender: "male",
      subject: null,
    }
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
    this.showDialog = false;
    this.studentService.currentStudent = Object.assign({}, stu);
  }

  sort(colName){
    this.allStudents.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
  }

}
