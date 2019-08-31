import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
  if (control.value.match(/^(?=.*\d).{5,20}$/)) {
    return null;
  }
  return { validUrl: true };
}