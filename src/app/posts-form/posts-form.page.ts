import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.page.html',
  styleUrls: ['./posts-form.page.scss'],
})
export class PostsFormPage implements OnInit {

  constructor(
    private postSvc: PostsService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  guardar(title, description) {


    this.postSvc.createPost(title, description)
    .subscribe( async res => {
      const alert = await this.alertController.create({
        header: 'Publicación creada',
        subHeader: '',
        message: '',
        buttons: ['Ok']
      });
  
      await alert.present();
    })
  }
}
