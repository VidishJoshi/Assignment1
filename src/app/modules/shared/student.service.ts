import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class StudentService {

  mockUrl = 'http://localhost:3000/Student';
  currentStudent: Student = {
    id: null,
    name: null,
    email: null,
    birthdate: null,
    active: true,
    gender: "male",
    subject: null,
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.mockUrl, headerOption)
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.mockUrl + "/" + id, headerOption)
  }

  createStudent(stu: Student): Observable<Student> {
    return this.http.post<Student> (this.mockUrl, stu, headerOption);
  }

  updateStudent(stu: Student): Observable<Student> {
    return this.http.put<Student> (this.mockUrl + "/" + stu.id, stu, headerOption);
  }

}
