import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person :Person

  constructor(personService :PersonService ) { 
    personService.getPerson().subscribe((response) => {
      this.person = response;
    });
  }

  ngOnInit(): void {
  }

}
