import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.page.html',
  styleUrls: ['./posts-form.page.scss'],
})
export class PostsFormPage implements OnInit {

  constructor(
    private postSvc: PostsService
  ) { }

  ngOnInit() {
  }


  guardar(title, description) {

    this.postSvc.createPost(title, description)
    .subscribe( res => console.info(res))
  }
}
