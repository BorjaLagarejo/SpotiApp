import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNew() {

    /*
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCTGsf21fsp8t9yyXkgtLkNi9-3Jo5jJNZK62LCBbvtINJm8c2JQGSXK0P-Y-TQY7Qw5GTZ_2P88vnYYaY'
    }) ;
    */

    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    }) ;

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    return this.http.get('/api/index.php?/core/members&key=994f7a52ca1f11e4443d93677be5d0f7&perPage=30', { headers });
  }
}
