import { AfterContentInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'general-information',
  standalone: true,
  imports: [],
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss'
})
export class GeneralInformationComponent implements AfterContentInit {

  @Output() loaded = new EventEmitter<boolean>

ngAfterContentInit(): void {
  this.loaded.emit(true)
}

openPuki(){
  const url: string = "https://events.pukiebook.com/event/769/register"
  window.open(url, '_blank')
}

}
