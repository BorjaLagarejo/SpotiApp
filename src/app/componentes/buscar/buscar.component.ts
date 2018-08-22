import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['../home/home.component.css'],
})
export class BuscarComponent {

  constructor(private spotify: SpotifyService) { }

  artistas: any[] = [];

  buscar (vBusqueda: string) {
    console.log(vBusqueda);
    this.spotify.getArtistas(vBusqueda).subscribe( (data: any) => {
      this.artistas = data;

    });
  }

}
