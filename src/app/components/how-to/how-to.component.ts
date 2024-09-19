import { Component } from '@angular/core';

@Component({
  selector: 'how-to',
  standalone: true,
  imports: [],
  templateUrl: './how-to.component.html',
  styleUrl: './how-to.component.scss'
})
export class HowToComponent {

  howToCompite: {
    svg: string,
    tittle: string,
    description: string
  }[] = [
    {
      svg: 'video',
      tittle: 'Clasificación online',
      description: 'Para competir en 2600 FIT FEST debes realizar el clasificatorio online. Los equipos y competidores que queden por encima del corte de puntajes se ganará el cupo para competir en la altura desafiante de Bogotá.'
    },
    {
      svg: 'form',
      tittle: 'Inscripción abierta',
      description: 'En una fecha predeterminada, la inscripción para ciertas categorías individuales estará abierta para competidores que quieran asegurar su puesto para competir en Bogotá.'
    },
    {
      svg: 'card',
      tittle: 'Invitación',
      description: 'Atletas de diferentes categorías pueden ser invitados a competir en 2600 FIT FEST, estas invitaciones son basadas en el desempeño en versiones pasada.'
    }
  ]

}
