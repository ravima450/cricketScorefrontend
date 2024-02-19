import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<div style="margin-left: 250px;"><router-outlet></router-outlet></div>`,
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
