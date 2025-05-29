import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goiburukoa',
  templateUrl: './goiburukoa.component.html',
  styleUrls: ['./goiburukoa.component.scss'],
  standalone: false,
})
export class GoiburukoaComponent  implements OnInit {

  @Input() titulua: string="";
  constructor() { }

  ngOnInit() {}

}
