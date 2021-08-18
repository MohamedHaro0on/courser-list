import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courseslist = [
    {
      title: "sql",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
      description: "sql is very important course",
      price: 100
    }
    ,
    {
      title: "sql",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
      description: "sql is very important course",
      price: 100
    }
    ,
    {
      title: "sql",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
      description: "sql is very important course",
      price: 100
    }
    ,
    {
      title: "sql",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
      description: "sql is very important course",
      price: 100
    }
    ,
    {
      title: "sql",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
      description: "sql is very important course",
      price: 100
    }
    ,
    {
      title: "sql",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNEMP8iA0XuzE6749xM_ptjqNkUWOYjX2Qg&usqp=CAU",
      description: "sql is very important course",
      price: 100
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
