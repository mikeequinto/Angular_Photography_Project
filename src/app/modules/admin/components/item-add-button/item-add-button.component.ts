import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-add-button',
  templateUrl: './item-add-button.component.html',
  styleUrls: ['./item-add-button.component.scss']
})
export class ItemAddButtonComponent implements OnInit {

  @Input() type: string;
  typeLabel: string;

  constructor() {}

  ngOnInit(): void {

    if (this.type === 'albums') {
      this.typeLabel = 'album';
    } else {
      this.typeLabel = 'picture';
    }

  }
}
