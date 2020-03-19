import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private connection: ConnectionService) { }

    getPerson(): Observable<Person>
    {
      const httpOptions = {
        headers: this.connection.getHttpHeaders(),
      };

      return this.http.get<Person>(this.connection.getConnectionString() + "/GetPerson", httpOptions);
  
    }
}
