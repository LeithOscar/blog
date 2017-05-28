import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog/blog.component';
import { Routes,RouterModule  } from '@angular/router';
import { PostComponent } from './blog/post/post.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  { path: 'blog',   component: BlogComponent },
  { path: 'post',      component: PostComponent },
  { path: 'register',      component: RegisterComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
