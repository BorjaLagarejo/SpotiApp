import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  todo: any = [];
  cargado = false;
  datos: any = [];


  urlPeticion = 'https://foro.gameflix.es/api/index.php?/forums/topics&key=994f7a52ca1f11e4443d93677be5d0f7&perPage=1000&forums=90';
  constructor(private http: HttpClient) {
    this.http.get(this.urlPeticion).subscribe((respuesta: any) => {
      for (let i = 0; i < respuesta.results.length; i++) {
        if (respuesta.results[i].prefix == null) {
          const objeto = {
            autor: respuesta.results[i].firstPost.author.name,
            estado: respuesta.results[i].prefix,
            texto: respuesta.results[i].firstPost.content
          };
          this.datos.push(objeto);
        }

      }
      this.cargado = true;
    });
  }


  ngOnInit() {
  }

}
