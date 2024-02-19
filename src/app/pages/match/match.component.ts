import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class MatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
