import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'central-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() navigateTo = new EventEmitter<string>();
  @Input() sections: { label: string; url: string, id: string }[] = [];
  @Input() toggleView: boolean = true;

  display: boolean = false;
  selectedItem: number = 0;
  isLateralMenuExpanded: boolean = false;

  imgPath: string = 'assets/icons/rrss-ig.svg';

  constructor() {
    if (typeof window !== 'undefined') {
      this.display = window.innerWidth > 1023 ? true : false;
    }
  }
  ngAfterViewInit() {}

  openRRSS(rs: string) {
    const url: string =
      rs === 'ig'
        ? 'https://www.instagram.com/2600fitfest/'
        : 'https://api.whatsapp.com/send?phone=573214919067&text=hola';
    window.open(url, '_blank');
  }

  handelNavigate(index: number, id: string) {
    this.selectedItem = index;
    this.navigateTo.emit(id);
  }

  openLateralMenu() {
    this.isLateralMenuExpanded = !this.isLateralMenuExpanded;
  }
}
