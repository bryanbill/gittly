import { Directive } from '@angular/core';

import { AbstractControl, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidation]',
})
export class ValidationDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    const isValid =
      !control.value ||
      (!control.value.startsWith(' ') && !control.value.endsWith(' '));
    return isValid ? { whitespace: false } : { whitespace: true };
  }
}
