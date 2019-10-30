import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { SummaryPipe } from './summary.pipe';
import { InputFormatDirective } from './input-format.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form.component.ts/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    InputFormatDirective,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
