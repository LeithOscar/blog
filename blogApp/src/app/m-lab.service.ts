import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MLabService {
 apiKey ="?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7";
  urlPosts = "https://api.mlab.com/api/1/databases/blog/collections/posts?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7";
   urlSavePosts = "https://api.mlab.com/api/1/databases/blog/collections/post/";
  urlLogin = "https://api.mlab.com/api/1/databases/blog/collections/posts?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7";
  urlRegister = "https://api.mlab.com/api/1/databases/blog/collections/posts?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7"
  constructor(private http: Http) {
  }


  public getAllPost(): any {


    return this.http.get(this.urlPosts).map((data: Response) => data.json() || {})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }
   public updatePost(post): any {

     this.http.put(this.urlSavePosts +post._id.$oid +  this.apiKey, post).map((data: Response) => data.json() || {})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }


  public login(username: string, pass: string): any {

    return this.http.get(this.urlLogin).map((data: Response) => data.json() || {})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }

  public logout(username: string, pass: string): any {
   //do something
  }

  public register(username: string, lastName: string, pass: string): any {
      return this.http.get(this.urlRegister).map((data: Response) => data.json() || {})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }

}
