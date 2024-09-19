import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'categories',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  @Output() setCategory = new EventEmitter<number>();

  selectedCategory: number = 0

  selectCategory(category: number, params: number) {
    this.selectedCategory = category

    this.setCategory.emit(params)
  }
}
