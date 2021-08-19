import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, albumName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];

        if (control.errors && !control.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== albumName) {
            control.setErrors({ mustMatch: true });
        } else {
            control.setErrors(null);
        }
    }
}
