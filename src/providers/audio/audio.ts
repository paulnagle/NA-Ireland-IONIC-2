import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AudioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AudioProvider Provider');
  }

  getApiUrl : string = "https://android.nasouth.ie/conventions.json";

  getConventions() {
    return this.http.get(this.getApiUrl);
  }

}
