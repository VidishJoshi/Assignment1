import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './modules/students/add-student/add-student.component';
import { StudentListComponent } from './modules/students/student-list/student-list.component';
import { StudentComponent } from './modules/students/student/student.component';

const routes: Routes = [
  { path: 'student-list', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'student', component: StudentComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
