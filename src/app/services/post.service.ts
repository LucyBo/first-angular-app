import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { 
  }

  getPosts() {
    return this.http.get(this.url);
  }
  
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({isRead: true}))
  }

  deletePost(post) {
    return this.http.delete(this.url + "/" + post.id)
    //.catchError(( error:Response ) =>{
    //  Observable.throw()
    //});
  }
}
