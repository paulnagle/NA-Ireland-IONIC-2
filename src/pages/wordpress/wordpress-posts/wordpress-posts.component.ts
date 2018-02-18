import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { WordpressService } from '../shared/services/wordpress.service';
import { WordpressPost } from '../wordpress-post/wordpress-post.component';

import 'rxjs/add/operator/timeout';

@Component({
	templateUrl: './wordpress-posts.html',
	providers: [ WordpressService ]
})
export class WordpressPosts {

	posts: any;
	pageCount: number;
	category: any;
	tag: any;
	author: any;
	search: string;
	hideSearchbar: boolean;
	favoritePosts: any;

	constructor(
		private navParams: NavParams,
		private wordpressService: WordpressService,
		private navController: NavController,
		private loadingController: LoadingController,
		private toastController: ToastController) {}

	ngOnInit() {
		this.category = this.navParams.get('category');
		this.tag = this.navParams.get('tag');
		this.author = this.navParams.get('author');
		this.hideSearchbar = true;
		this.search = '';
		this.favoritePosts = [];

		this.getPosts();
	}

	getPosts() {
		this.pageCount = 1;

		let query = this.createQuery();
		let loader = this.loadingController.create({
			content: "Please wait",
      duration: 10000
		});

		loader.present();
		this.wordpressService.getPosts(query)
		.timeout(10000)
		.subscribe(result => {
			this.posts = result;
			loader.dismiss();
		} , (errorResponse: any) =>{
			console.log ("Timed out after 10 seconds. Check internet connection?");
			loader.dismiss();
			loader = this.loadingController.create({
				content: "Request timed out?",
				duration: 5000
			});
			loader.present();
		});
	}

	loadPost(post) {
		this.navController.push(WordpressPost, {
			post: post
		});
	}

	createQuery() {
		let query = {};
		query['page'] = this.pageCount;
		query['categories'] = 9;
		return query;
	}

}
