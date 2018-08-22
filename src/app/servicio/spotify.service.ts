import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }
  getConsulta(query: string) {
    const url = 'https://api.spotify.com/v1/' + query;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAcuAQ2nQqEIDJP4RuuU1eL4uU-PjNH6RWHhdCrLhpKYzEP88mfzIF2XjVB2NIWcfph7Qx6jQTesmA-yh4'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getConsulta('browse/new-releases').pipe( map(date => date['albums'].items));
  }
  getArtistas(vBusqueda: string) {
    return this.getConsulta('search?q=' + vBusqueda + '&type=artist&limit=10&offset=5').pipe( map(date => date['artists'].items));
  }
}
