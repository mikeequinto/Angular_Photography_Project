import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ImageService } from 'src/app/core/services/image/image.service';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() album!: Album;
  imagePath: string;
  albumName: string;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {

    if (this.album) {
      if (this.album.name.length > 25) {
        this.albumName = this.album.name.substr(0,25) + '...';
      }else {
        this.albumName = this.album.name;
      }
    }

    this.imageService.getImage(this.album.key, true).subscribe(res => {
      this.imagePath = 'data:image/jpeg;base64,' + res;
    })
  }

}
