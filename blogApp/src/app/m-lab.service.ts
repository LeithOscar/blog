import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MLabService {

  constructor(private http: Http) {
  }


  public getAllPost(): any {

    let url = "https://api.mlab.com/api/1/databases/blog/collections/posts?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7";
    return this.http.get(url).map((data: Response) => data.json() || {})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }

  public login(username: string, pass: string): any {
    console.log(">login", username, pass);
  }

  public logout(username: string, pass: string): any {
    console.log(">logout", username, pass, );
  }

  public register(username: string, lastName: string, pass: string): any {
    console.log(">register", username, lastName, pass);
  }

}
