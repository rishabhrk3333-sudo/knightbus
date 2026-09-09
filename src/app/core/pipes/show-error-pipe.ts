import { Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_CONSTANTS } from '../constants/validation.constant';
@Pipe({
  name: 'showError',
})
export class ShowErrorPipe implements PipeTransform {
  transform(keyName: string): string {
    if (keyName === null || keyName === undefined) {
      return '';
    }
    console.log('Received keyName:', keyName);

    const validationData:any = VALIDATION_CONSTANTS;
    return validationData[keyName];
  }
}
