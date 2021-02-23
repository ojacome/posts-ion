import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsFormPage } from './posts-form.page';

const routes: Routes = [
  {
    path: '',
    component: PostsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsFormPageRoutingModule {}
