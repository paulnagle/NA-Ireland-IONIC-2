import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://www.na-ireland.org/wp-json';
	// public wordpressApiUrl = 'http://demo.wp-api.org/wp-json'
	
	public feedsUrl = './assets/data/feeds.json';
	public feedsCategoryUrl = './assets/data/feeds-category.json';
	public emailTo = 'gtsopour@gmail.com';
}
