import { Component, OnInit } from '@angular/core';


interface ILiburua {
  isbn:string;
  titulo:string;
  autor:string;
  sinopsis:string;
  imagen:string;
  argitaletxea: string;
  orrialdeak: number;
}


@Component({
  selector: 'app-liburutegia',
  templateUrl: './liburutegia.page.html',
  styleUrls: ['./liburutegia.page.scss'],
  standalone: false,
})


export class LiburutegiaPage implements OnInit {

  

  constructor() { }

  ngOnInit() {
    // irakurri liburuak zerbitzuari deitu

  }

  // FUNTZIOA 1: liburua gehitu alerta sortu

 // FUNTZIOA 2: balidatu alertan sartu diren datuak

}
