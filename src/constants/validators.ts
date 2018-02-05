import {AbstractControl, Validators} from '@angular/forms';
import {formControls} from './forms';

export function matchPasswordValidator(AC: AbstractControl): any {
  const password = AC.get(formControls.password).value;
  const passwordConfirm = AC.get(formControls.passwordConfirm).value;
  if (password === passwordConfirm) {
    return null;
  }
  AC.get(formControls.passwordConfirm).setErrors({MatchPassword: true});
}

export const emailPattern =
  Validators.pattern('[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.)*(\.[A-Za-z]{2,})');
