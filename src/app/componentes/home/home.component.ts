import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  todo: any = {};
  cargado = false;
  constructor(private http: HttpClient) {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://foro.gameflix.es/api/index.php?/core/members&key=994f7a52ca1f11e4443d93677be5d0f7').subscribe((respuesta: any) => {
      this.todo = respuesta;
      this.cargado = true;
    });
  }

  ngOnInit() {
  }

}
