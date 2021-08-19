import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-album-edit-button',
  templateUrl: './album-edit-button.component.html',
  styleUrls: ['./album-edit-button.component.scss']
})
export class AlbumEditButtonComponent implements OnInit {

  @Input() album!: Album

  constructor() { }

  ngOnInit() {
  }

}
