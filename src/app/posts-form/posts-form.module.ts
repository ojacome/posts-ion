import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsFormPageRoutingModule } from './posts-form-routing.module';

import { PostsFormPage } from './posts-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsFormPageRoutingModule
  ],
  declarations: [PostsFormPage]
})
export class PostsFormPageModule {}
