import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import json_liburuak from '../../assets/json/liburuak.json';

interface ILiburua {
  isbn: string;
  titulo: string;
  autor: string;
  sinopsis: string;
  imagen: string;
  argitaletxea: string;
  orrialdeak: number;
}

interface IJson {
  isbn: string;
  titulo: string;
  autor: string;
  sinopsis: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class JsonIrakurriService {
  json_Fitxategia: IJson[] = [];
  liburuak: ILiburua[] = [];

  constructor() {
    this.json_Kargatu();
    this.liburutegi_Kargatu();
  }

  // FUNTZIOA 1: liburuak JSON fitxategitik irakurtzen duen funtzioa eta falta diren datuak (argitaletxea eta orrialde kopurua)
  //balioak bueltatzen duen funtzioa
  private json_Kargatu() {
    this.json_Fitxategia = json_liburuak;
  }

  private liburutegi_Kargatu() {
    this.liburuak = json_liburuak.map((p) => ({
      ...p,
      argitaletxea: 'Ez da eurkitu',
      orrialdeak: 404,
    }));
  }

  public get_Liburuak(): ILiburua[] {
    return this.liburuak;
  }

  insert(liburu_berria: ILiburua): void {
    this.liburuak.push(liburu_berria);
    //this.liburuak.total++;
  }
}
// Es necesario el total de libros?