import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  @Input() type: string;

  ngOnInit(): void {

    if (this.type === 'albums') {
      this.getAlbums();
    } else {
      console.log('get pictures');
    }
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(albums => this.albums = albums);
  }


}
