import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPlaceholderService } from '../services/jsonplaceholder.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'web-app';

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {

  }
  ngOnInit(): void {
    this.jsonPlaceholderService.getPosts().subscribe(data => {
      //console.log(data[0].body);
    });
  }
}
