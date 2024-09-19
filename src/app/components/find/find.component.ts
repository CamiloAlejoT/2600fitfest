import { Component } from '@angular/core';

@Component({
  selector: 'find',
  standalone: true,
  imports: [],
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss',
})
export class FindComponent {
  cardContent: {
    tittle: string;
    text: string;
  }[] = [
    {
      tittle: 'Competencia de fitness',
      text: 'Competencia en diferentes categorías para todos los niveles.',
    },
    {
      tittle: 'Tecnología deportiva',
      text: 'Vitrina comercial y puesta en marcha de tecnología innovadora para funtional fitness.',
    },
    {
      tittle: 'Transmisión en vivo',
      text: 'Queremos llegar al corazón de nuestro público tanto presencial como los que nos ven desde casa.',
    },
    {
      tittle: 'Seminarios y clases',
      text: 'Contaremos con distintas r actividades recreativas para que disfrutes del fin de semana.',
    },
  ];
}
