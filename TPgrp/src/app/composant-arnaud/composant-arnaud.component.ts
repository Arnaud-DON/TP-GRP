import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-arnaud',
  templateUrl: './composant-arnaud.component.html',
  styleUrls: ['./composant-arnaud.component.css']
})
export class ComposantArnaudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("Bonjour");
  }

}
