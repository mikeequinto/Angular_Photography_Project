import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-album-edit-form',
  templateUrl: './album-edit-form.component.html',
  styleUrls: ['./album-edit-form.component.scss']
})
export class AlbumEditFormComponent implements OnInit {

  @Input() album!: Album

  filePath: string = ''

  albumNameForm: FormGroup
  albumDescriptionForm: FormGroup
  albumCoverForm: FormGroup

  constructor(
    private fbName: FormBuilder,
    private fbDescription: FormBuilder,
    private fbCover: FormBuilder,
  ) { }

  ngOnInit() {

    console.log(this.album.name);


    this.initForm();

    // Bootstrap form fields validation
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    })();
  }

  private initForm() {
    this.albumNameForm = this.fbName.group ({
      albumNameEdit: ['', Validators.required],
    }, {updateOn: 'submit'})

    this.albumDescriptionForm = this.fbDescription.group ({
      albumDescriptionEdit: ['', Validators.required],
    }, {updateOn: 'submit'})

    this.albumCoverForm = this.fbCover.group ({
      albumCoverEdit: ['', Validators.required],
    }, {updateOn: 'submit'})
  }

  onFileChange(event) {
    let selectedFile = (event.target as HTMLInputElement).files[0]

    // Check file size
    if (selectedFile.size <= 10000000) {
      /*this.fileSizeOk = true
      this.showFileSizeError = false
      this.file = selectedFile*/

      // Set file path for preview
      const reader = new FileReader()
      reader.onload = () => {
        this.filePath = reader.result as string
      }
      reader.readAsDataURL(selectedFile)

    } else {
      /*this.fileSizeOk = false
      this.showFileSizeError = true
      this.filePath = ""
      this.file = null*/
    }
  }

}
