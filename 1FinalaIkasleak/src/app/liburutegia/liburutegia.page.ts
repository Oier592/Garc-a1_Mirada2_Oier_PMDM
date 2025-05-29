import { Component, OnInit } from '@angular/core';
import { JsonIrakurriService } from '../zerbitzuak/json-irakurri.service';
import { AlertController } from '@ionic/angular';

interface ILiburua {
  isbn: string;
  titulo: string;
  autor: string;
  sinopsis: string;
  imagen: string;
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
  liburuak: ILiburua[] = [];
  titulua: string = 'A';
  constructor(
    private jsonIrakurriService: JsonIrakurriService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // irakurri liburuak zerbitzuari deitu
    this.liburuak = this.jsonIrakurriService.get_Liburuak();
  }

  // FUNTZIOA 1: liburua gehitu alerta sortu
  async Insert_Alerta() {
    const alert = await this.alertController.create({
      header: 'Liburu berria',
      inputs: [
        { name: 'titulua', placeholder: 'Titulua', type: 'text' },
        { name: 'egilea', placeholder: 'Egilea', type: 'text' },
        { name: 'isbn', placeholder: 'ISBN', type: 'text' },
        { name: 'sinopsis', placeholder: 'Sinopsis', type: 'text' },
        { name: 'irudia', placeholder: 'Irudia', type: 'text' },
        { name: 'argitaletxea', placeholder: 'Argitaletxea', type: 'text' },
        { name: 'orrialdeak', placeholder: 'Orrialdeak', type: 'number' },
      ],
      buttons: [
        {
          text: 'Utzi',
          role: 'cancel',
        },
        {
          text: 'Gorde',
          handler: (liburu_berria) => {
            this.jsonIrakurriService.insert({
              isbn: liburu_berria.isbn,
              titulo: liburu_berria.titulua,
              autor: liburu_berria.egilea,
              sinopsis: liburu_berria.sinopsis,
              imagen: liburu_berria.irudia,
              argitaletxea: liburu_berria.argitaletxea,
              orrialdeak: liburu_berria.orrialdeak,
            });
          },
        },
      ],
    });

    await alert.present();
  }

  // FUNTZIOA 2: balidatu alertan sartu diren datuak
}
