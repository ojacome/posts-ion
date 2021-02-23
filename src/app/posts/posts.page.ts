import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {

  posts: any[] = [];


  constructor(
    private postSvc: PostsService,
    public alertController: AlertController
  ) {
  }

  cargarData() {
    console.info('cargando data')
    this.postSvc.getPosts()
      .subscribe((res: any) => this.posts = res)
  }

  ionViewWillEnter() {
    this.cargarData();
  }

  async delete(id) {

    const alert = await this.alertController.create({
      header: '¿Seguro de Eliminar?',
      subHeader: '',
      message: 'No podrás recuperar la información.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.postSvc.deletePost(id)
            .subscribe(res => {
              this.posts = this.posts.filter(p => p.id != id)
            })
        }
      }, 'Cancel']
    });

    await alert.present();

  }
}
