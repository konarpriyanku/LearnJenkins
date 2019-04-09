import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .subscribe(() => {
        this.getAllPeople();
      });
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/users`)
      .subscribe(people => {
        console.log(people);
        this.people = people.json();
      });
  }
}
