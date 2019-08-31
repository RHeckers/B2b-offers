import { AbstractControl } from '@angular/forms';

export function MatchWith(control: AbstractControl) {
    if (control.parent) {
        if (control.value === control.parent.controls[control['matchWith']].value) {
            return null;
        }
    }
    return { validUrl: true };
}
