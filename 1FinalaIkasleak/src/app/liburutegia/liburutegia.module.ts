import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule } from '@ionic/angular';

import { LiburutegiaPageRoutingModule } from './liburutegia-routing.module';

import { LiburutegiaPage } from './liburutegia.page';
import { ModuluaModule } from '../Konponenteak/modulua.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiburutegiaPageRoutingModule,
    ModuluaModule,
],
  declarations: [LiburutegiaPage]
})
export class LiburutegiaPageModule {}
