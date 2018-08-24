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
  alert = false;
  busqueda: String = '';
  carga = false;



  buscar (vBusqueda: string) {
    console.log(vBusqueda);
    if (vBusqueda.length > 1) {
      this.carga = true;
      this.busqueda = vBusqueda;
      this.spotify.getArtistas(vBusqueda).subscribe( (data: any) => {
        console.log(data);
        if (data.length === 0) {
          this.alert = true;
        } else {
          this.alert = false;
        }
        this.carga = false;
        this.artistas = data;
      });
    } else {
      this.alert = false;
    }
  }

}
