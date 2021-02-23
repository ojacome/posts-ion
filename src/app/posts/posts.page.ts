import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage  {

  posts: any = [];


  constructor(
    private postSvc: PostsService
  ) {     
  }

  cargarData(){
    console.info('cargando data')
    this.postSvc.getPosts()
    .subscribe( res => this.posts = res )
  }

  ionViewWillEnter(){
    this.cargarData();
  }

}
