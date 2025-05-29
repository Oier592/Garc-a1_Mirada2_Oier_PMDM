import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ILiburua {
  isbn:string;
  titulo:string;
  autor:string;
  sinopsis:string;
  imagen:string;
  argitaletxea: string;
  orrialdeak: number;
}

interface IJson {
  isbn:string;
  titulo:string;
  autor:string;
  sinopsis:string;
  imagen:string;
}

@Injectable({
  providedIn: 'root'
})



export class JsonIrakurriService {

  
  constructor() { }

  // FUNTZIOA 1: liburuak JSON fitxategitik irakurtzen duen funtzioa eta falta diren datuak (argitaletxea eta orrialde kopurua)
  //balioak bueltatzen duen funtzioa

  
}
