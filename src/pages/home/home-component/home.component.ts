import { Component } from '@angular/core';
import { NavController, Events, MenuController } from 'ionic-angular';

import { AboutComponent } from '../../about/about-component/about.component';
import { WordpressHome } from '../../wordpress/wordpress-home/wordpress-home.component';
import { WordpressTags } from '../../wordpress/wordpress-tags/wordpress-tags.component';
import { WordpressFavorites } from '../../wordpress/wordpress-favorites/wordpress-favorites.component';
import { WordpressPages } from '../../wordpress/wordpress-pages/wordpress-pages.component';
import { WordpressPage } from '../../wordpress/wordpress-page/wordpress-page.component';
import { FeedCategoriesComponent } from '../../feeds/feed-categories/feed-categories.component';
import { FeedCategoryComponent } from '../../feeds/feed-category/feed-category.component';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomeComponent {
	pages: Array<{title: string, component: any, icon: string, note: string, params?: any}>;
	constructor(
		private navController: NavController,
		private menuController: MenuController,
		private events: Events) {}

	ngOnInit() {
	  	this.pages = [
	      { title: 'ABOUT', component: AboutComponent, icon: 'photos', note: '' },
	      { title: 'TAGS', component: WordpressTags, icon: 'pricetags', note: 'Wordpress' },
	      { title: 'FAVORITES', component: WordpressFavorites, icon: 'heart', note: 'Wordpress (Storage)' },
	      { title: 'PAGES', component: WordpressPages, icon: 'document', note: 'Wordpress' },
				{ title: 'PAGE', component: WordpressPage, icon: 'document', note: 'Wordpress', params: { id: 2 }},
	      { title: 'FEEDS', component: FeedCategoriesComponent, icon: 'logo-rss', note: 'RSS (YQL)' },
	      { title: 'FEED_CATEGORY', component: FeedCategoryComponent, icon: 'logo-rss', note: 'RSS (YQL)' }
	    ];

	    this.events.subscribe('navigationEvent',(object) => {
	    	this.menuController.close();
				if (object.component) {
					this.navController.push(object.component, object.params);
				}
		});
	}

	openPage(page) {
		this.navController.push(page.component, page.params);
	}

}
