import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefine-pipe',
  templateUrl: './predefine-pipe.component.html',
  styleUrls: ['./predefine-pipe.component.scss']
})
export class PredefinePipeComponent implements OnInit {
title=`Angular is a powerful open-source TypeScript framework developed by Google for building dynamic web applications. Front-end developers use frameworks like Angular or React to create efficient and interactive user interfaces. Angular simplifies creating Single Page Applications (SPAs) by extending HTML with new attributes.`
course={
  title:'Development',
  students:2345,
  rating:4.8,
  price:200.99,
  marks:67573.433,
releaseDate:new Date(2024,6,21)
}
  constructor() { }

  ngOnInit(): void {
  }

}
