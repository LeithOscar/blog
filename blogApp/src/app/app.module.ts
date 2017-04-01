import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog/blog.component';
import { Routes,RouterModule  } from '@angular/router';
import { PostComponent } from './blog/post/post.component';


const appRoutes: Routes = [
  { path: 'blog',   component: BlogComponent },
  { path: 'post',      component: PostComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostComponent
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
