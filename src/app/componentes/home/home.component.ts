import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasConaciones: any[] = [];
  error = false;

  constructor( private spotify: SpotifyService) {

    this.spotify.getNew().subscribe( (data: any) => {
      console.log('El data -> ', data);
      this.nuevasConaciones = data.results;
    });
  }


  ngOnInit() {
  }

}
