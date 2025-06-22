import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TableListComponent {
  @Input() data!: any[];
  @Input() columns!: { header: string; field: string }[];
  @Output() delete = new EventEmitter<number>();
  @Input() listName: string = '';

  constructor() {  this.mostrandoListName() }

  onDeleteRow(id: number) {
    this.delete.emit(id);
  }

   mostrandoListName(){
    return this.listName ? this.listName : 'Lista de Datos';
   }
}
