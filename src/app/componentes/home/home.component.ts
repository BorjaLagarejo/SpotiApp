import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  error = false;
  carga = false;

  constructor( private spotify: SpotifyService) {

    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.carga = true;
    });
  }


  ngOnInit() {
  }

}
