import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../../shared/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  
  showDialog: boolean = false;

  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit(): void {
    console.log(this.studentService.currentStudent);
    this.clear();
  }

  createAndUpdate(currentStudent: Student) {
    console.log(currentStudent);
    if(currentStudent.name != null && currentStudent.email != null){
      this.createStudent(currentStudent);
    }
  }

  createStudent(stu: Student) {
    this.studentService.createStudent(stu).subscribe(() => {
      this.showDialog = true;
    });
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

}
