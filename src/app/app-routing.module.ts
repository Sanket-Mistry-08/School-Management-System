import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TestComponent } from './component/test/test.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PlaygroundComponent } from './component/playground/playground.component';
import { RightPartComponent } from './main-container/right-part/right-part.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentAddComponent } from './component/student/student-add/student-add.component';
import { TeacherListComponent } from './component/teacher/teacher-list/teacher-list.component';
import { TeacherAddComponent } from './component/teacher/teacher-add/teacher-add.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminStudentComponent } from './component/admin-student/admin-student.component';
import { AdminTeacherComponent } from './component/admin-teacher/admin-teacher.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:PlaygroundComponent,children:[
    {path:'students/student list',component:StudentListComponent},
    {path:'students/student add',component:StudentAddComponent},
    {path:'teachers/teacher list',component:TeacherListComponent},
    {path:'teachers/teacher add',component:TeacherAddComponent},
    {path:'dashboard/admin dashboard',component:AdminDashboardComponent,children:[
      {path:'student',component:AdminStudentComponent},{path:'teacher',component:AdminTeacherComponent}
    ]}
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
