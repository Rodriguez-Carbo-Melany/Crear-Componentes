import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {
  showImage: boolean = false; // Controla si la imagen se muestra o no

  toggleImage() {
    this.showImage = !this.showImage; // Alterna el estado de visibilidad de la imagen
  }
}
