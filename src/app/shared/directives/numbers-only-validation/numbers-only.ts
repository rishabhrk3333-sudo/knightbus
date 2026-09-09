import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnly {

  @HostListener('keypress', ['$event']) onInputChange(event: any) {
  
    const initialValue = event.key;

    const numberOnlyPattern = /^[0-9]*$/;
    if(!numberOnlyPattern.test(initialValue)) {
       event.preventDefault();
    }
  
  }
}
