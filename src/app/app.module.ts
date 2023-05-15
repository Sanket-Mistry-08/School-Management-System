import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { TestComponent } from './component/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataTableComponent } from './component/data-table/data-table.component';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { UserProfileComponent } from './component/main/user-profile/user-profile.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PlaygroundComponent } from './component/playground/playground.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { LeftPartComponent } from './main-container/left-part/left-part.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    DataTableComponent,
    StudentFormComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    PlaygroundComponent,
    NavbarComponent,
    MainContainerComponent,
    LeftPartComponent,
    RightPartComponent,
    AboutComponent,
    ContactComponent,
    StudentListComponent,
    StudentAddComponent,
    TeacherListComponent,
    TeacherAddComponent,
    AdminDashboardComponent,
    AdminStudentComponent,
    AdminTeacherComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
