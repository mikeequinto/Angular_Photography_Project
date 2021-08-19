import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  private routeSub: Subscription;
  albumId: string;
  album!: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.albumId = params['id'];

      this.albumService.getAlbum(this.albumId).subscribe(res => {
        this.album = res.albumData;
      });

    });
  }

}
