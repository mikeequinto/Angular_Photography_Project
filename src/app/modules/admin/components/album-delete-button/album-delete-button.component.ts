import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-album-delete-button',
  templateUrl: './album-delete-button.component.html',
  styleUrls: ['./album-delete-button.component.scss']
})
export class AlbumDeleteButtonComponent implements OnInit {

  @Input() album!: Album

  tempName: string = 'hello'

  showAlbumDeleteError: boolean = false

  albumForm : FormGroup

  constructor(private formBuilder: FormBuilder, private albumService: AlbumService,) { }

  ngOnInit() {

    this.albumForm = this.formBuilder.group({
      albumName : new FormControl('', Validators.required)
    }, {
      validator: MustMatch('albumName', this.album.name)
    })

  }

  onSubmit(): void {

    this.showAlbumDeleteError = false
    if (this.albumForm.valid) {
      this.deleteAlbum()
    } else {
      this.showAlbumDeleteError = true
    }

  }

  deleteAlbum(): void {

    console.log(this.album._id);

    this.albumService.deleteAlbum(this.album._id)
      .subscribe(
        res => {
          console.log(res);
          location.reload()
        },
        err => {
          console.log(err);
          this.showAlbumDeleteError = true
        }
      )
  }
}
