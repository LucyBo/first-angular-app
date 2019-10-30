import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;
  constructor(private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response;
    });
  }

  }

