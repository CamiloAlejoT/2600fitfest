import { Component, Input } from '@angular/core';

export interface standard {
  name: string,
  description: string[]
}


@Component({
  selector: 'standards',
  standalone: true,
  imports: [],
  templateUrl: './standards.component.html',
  styleUrl: './standards.component.scss'
})
export class StandardsComponent {

  @Input() selectedCategory: number = 0

  standards:standard[] =[
    {
      name: 'Squat Snatch',
      description: ['75/55', '95/65', '115/75', '135/95']
    },
    {
      name: 'C&J',
      description: ['95/65','115/75','135/95','155/105']
    },
    {
      name: 'Thruster',
      description: ['75/55','95/65', '115/75', '135/95']
    },
    {
      name: 'Dead lift',
      description: ['135/95', '155/105', '185/125','225/155']
    },
    {
      name: 'Pull ups',
      description: ['Banded', 'Sí','Sí','Sí']
    },
    {
      name: 'C2B',
      description: ['No' , 'No','Sí', 'Sí']
    },
    {
      name: 'Bar Muscle Up',
      description: ['No', 'No', 'Sí','Ring MuscleUp']
    },
    {
      name: 'T2B',
      description: ['Knee raises','Sí','Sí','Sí']
    },
    {
      name: 'HSPU',
      description: ['Push Ups', 'ABM' , 'Plano', 'Déficit']
    },
    {
      name: 'pistols',
      description: ['No','Sí','Sí','Sí']
    },
    {
      name: 'Saltos',
      description: ['S.U', 'D.U.', 'D.U.','D.U.']
    },
    {
      name: 'HSW',
      description: ['No', 'No', 'Sí', 'Sí']
    }
  ] 
   
  

}
