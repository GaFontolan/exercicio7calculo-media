import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent implements OnInit {
  ac1 : any;
  ac2 : any;
  ag : any;
  af : any;
  media : any;
  constructor() {}

  ngOnInit(): void {}

  somar(){
    this.media = ((this.ac1 * 0.5) + (this.ac2 * 0.30) + (this.af * 0.10) + (this.ag * 0.45))/4
  }
}
