import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const base_url = environment.url_api+'/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }


  getPosts(){
    return this.http.get(base_url);
  }

  getPost(){

  }
  
  createPost(title: string, description: string){
    return this.http.post(base_url, { title, description })
  }
}
