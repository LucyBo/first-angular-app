import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any;
 
  constructor(private service: PostService) {
  }
  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    }, 
      error => {
      alert('An unexpected error occured.');
      console.log(error)
    });
  }
  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    this.posts.splice(0,0, post);
    input.value = '';
    this.service.createPost(post)
      .subscribe( response => {
        //post['id'] = response.id;
        console.log(response);
      }, 
        error => {
        alert('An unexpected error occured.');
        console.log(error)
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    }, 
      error => {
      alert('An unexpected error occured.');
      console.log(error)
    });
    //this.http.put(this.url, JSON.stringify({post}))
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
        (error: Response) => {
        if(error.status === 404)
        alert("This post has already been deleted");
        else {
          alert('An unexpected error occured.');
          console.log(error)
        }
      });
  }
  }

