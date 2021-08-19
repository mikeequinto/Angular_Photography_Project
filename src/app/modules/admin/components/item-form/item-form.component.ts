import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/core/services/album/album.service';
import { ImageService } from 'src/app/core/services/image/image.service';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input() type: string;

  @Input() existingAlbum: Album;

  albumForm: FormGroup;
  file: File;
  filePath = '';
  fileSizeOk = false;
  showFileSizeError = false;
  showAlbumCreationError = false;

  albumId: string;
  newImageKey: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private albumService: AlbumService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {

    // Get album id if exists
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.albumId = params['id'];
        console.log(this.albumId);
      }
    });

    // Initialize form
    this.initForm();

    // Bootstrap form fields validation
    (() => {
      'use strict';

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation');

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated');
          }, false);
        });
    })();

    // Fetch album image
    if (this.existingAlbum) {
      this.imageService.getImage(this.existingAlbum.key, true).subscribe(res => {
        this.filePath = 'data:image/jpeg;base64,' + res;
      });
    }
  }

  private initForm(): void {
    this.albumForm = this.fb.group ({
      albumName: ['', Validators.required],
      albumDescription: ['', Validators.required],
      albumCover: ['', Validators.required]
    }, {updateOn: 'submit'});
  }

  onFileChange(event): void {
    const selectedFile = (event.target as HTMLInputElement).files[0];

    // Check file size
    if (selectedFile.size <= 10000000) {
      this.fileSizeOk = true;
      this.showFileSizeError = false;
      this.file = selectedFile;

      // Set file path for preview
      const reader = new FileReader();
      reader.onload = () => {
        this.filePath = reader.result as string;
      };
      reader.readAsDataURL(selectedFile);
    } else {
      this.fileSizeOk = false;
      this.showFileSizeError = true;
      this.filePath = '';
      this.file = null;
    }
  }

  async onSubmit(): Promise<void> {

    this.showAlbumCreationError = false;

    const albumName = this.albumForm.value.albumName;
    const albumDescription = this.albumForm.value.albumDescription;
    const albumCover = this.albumForm.value.albumCover;

    if (this.type === 'albums') {
      // Check if fields and file size ok
      if (albumName !== '' && albumDescription !== '' && albumCover !== '') {

        if (this.fileSizeOk) {
          // Upload image to s3 first
          await this.uploadImage();

          // Create album in database
          this.createAlbum();
        } else {
          alert('The file you have chosen is too big (limit: 10 MB)');
        }
      }
    } else {
      // Check if picture is ok
      if (albumCover !== '' && this.fileSizeOk) {
        // Upload image to s3 first
        await this.uploadImage();

        // Add image to album
        this.addToAlbum();
      }
    }
  }

  uploadImage(): Promise<void>{
    const fd = new FormData();
    fd.append('image', this.file, this.file.name);

    return new Promise(resolve => {
      this.imageService.uploadImage(fd)
      .subscribe(
        res => {
          // Update album data
          this.newImageKey = res.imageKey;
          resolve();
        },
        err => { console.log(err); }
      );
    });
  }

  createAlbum(): void {
    this.albumService.createAlbum(
      this.albumForm.value.albumName,
      this.albumForm.value.albumDescription,
      this.newImageKey)
      .subscribe(
        res => {
          console.log(res);
          // Reload page
          location.reload();
        },
        err => {
          console.log(err);
          this.showAlbumCreationError = true;
        }
      );
  }

  addToAlbum(): void {
    this.albumService.addPicture(this.albumId, this.newImageKey)
      .subscribe( res => {
        console.log(res);
      }, err => {
        console.log(err);
        this.showAlbumCreationError = true;
      });
  }
}
