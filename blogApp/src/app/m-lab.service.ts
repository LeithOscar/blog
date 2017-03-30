import { Injectable } from '@angular/core';

@Injectable()
export class MLabService {

  constructor() { }


  public login(username: string, pass: string): any {
    console.log(">login",username, pass);
  }

  public logout(username: string, pass: string): any {
    console.log( ">logout",username, pass,);
  }

   public register(username: string,lastName: string, pass: string): any {
    console.log(">register",username, lastName, pass);
  }

}
