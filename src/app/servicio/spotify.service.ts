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
      'Authorization': 'Bearer BQDgrGLqxXdpv9MpOtPJ-5E_GSO9KZxIjCWXrF6I8QNUUUP9tvaEHKg1pdgyh2IxqZytjkJh8DcTiQKVJOE'
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
