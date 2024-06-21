import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
  title=`Angular is a powerful open-source TypeScript framework developed by Google for building dynamic web applications. Front-end developers use frameworks like Angular or React to create efficient and interactive user interfaces. Angular simplifies creating Single Page Applications (SPAs) by extending HTML with new attributes.`
  fileArr=[
    {
      filename:'Pdf File',
      type:'<i class="fa-solid fa-file-pdf"></i>',
      size:745635
    },
    {
      filename:'Word File',
      type:'<i class="fa-solid fa-file-word"></i>',
      size:6543
    },
    {
      filename:'Excel File',
      type:'<i class="fa-regular fa-file-excel"></i>',
      size:4567
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
