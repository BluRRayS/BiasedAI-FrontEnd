import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private address: string = "http://localhost:8083";

  private connectionString : string = this.address;


  constructor() { }
  
  public getConnectionString():string {
    return this.connectionString;
  }

  public getHttpHeaders():HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }


}
