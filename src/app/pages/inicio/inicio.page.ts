import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  //crear nuevo listado
  //componentes: any[] = [];
  componentes: Componente[] = [
    {
      icon: '',
      name: 'ion-button',
      redirectTo: '/action-sheet'
    },
    {
      icon: '',
      name: 'ion-avatar',
      redirectTo: '/alert'
    },
  ];
  constructor() { }
  
}

