import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { WordpressPosts } from './wordpress-posts/wordpress-posts.component';
import { WordpressPost } from './wordpress-post/wordpress-post.component';
import { WordpressFeatureMedia } from './wordpress-feature-media/wordpress-feature-media.component';



@NgModule({
  declarations: [
    WordpressPosts,
    WordpressPost,
    WordpressFeatureMedia
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    WordpressPosts,
    WordpressPost,
    WordpressFeatureMedia
  ],
  entryComponents:[
  	WordpressPosts,
    WordpressPost,
    WordpressFeatureMedia
  ]
})
export class WordpressModule {}
