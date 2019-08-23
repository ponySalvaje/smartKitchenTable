import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})

export class IngredientComponent implements OnInit {

  constructor() { }

  private x1: number
  private x2: number

  private y1: number
  private y2: number

  public title: string

  public xposition: number;
  public yposition: number;

  public donutwidth: number;
  public donutheight: number;

  public borderwidth: number;

  ngOnInit() {
    this.init();
    console.log(this.xposition);
    console.log(this.yposition);
    console.log(this.donutwidth);
    console.log(this.donutheight);
  }

  getCoordinatesFromApi() {
    this.x1 = 500;
    this.y1 = 300;

    this.x2 = 800;
    this.y2 = 600;

    this.calculateDimensions(this.x1, this.y1, this.x2, this.y2);
  }

  calculateDimensions(x1, y1, x2, y2) {
    const r = Math.sqrt(Math.pow((y2 - y1) / 2, 2) + Math.pow((x2 - x1) / 2, 2));

    this.xposition = ((x1 + x2) / 2 ) - r;
    this.yposition = ((y1 + y2) / 2 ) - r;

    this.donutwidth = 2 * r;
    this.donutheight = 2 * r;

    this.borderwidth = r / 4;
  }

  init(){
    this.getCoordinatesFromApi();
  }

}
