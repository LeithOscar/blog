import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/index';


@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    //    public getAll() {
    //         return this.http.get('https://api.mlab.com/api/1/databases/blog/collections/users?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7', this.jwt()).map((response: Response) => response.json());
    //     }

<<<<<<< HEAD
       public  getById(model: any) {
            return this.http.get('https://api.mlab.com/api/1/databases/blog/collections/users?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7' + model, this.jwt()).map((response: Response) => response.json());
=======
   public  getById(id: number) {
            return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
>>>>>>> a2013acaa73e6e2c2b2d1d6438cb317a032c4c28
        }

    public create(user: User) {
        return this.http.post('https://api.mlab.com/api/1/databases/blog/collections/users?apiKey=v3R_p4kQqCuw7kT-M1aCiTZ88k8zPlf7', user, this.jwt()).map((response: Response) => response.json());
    }

    // public update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    // }

    // public delete(id: number) {
    //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('_id'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}