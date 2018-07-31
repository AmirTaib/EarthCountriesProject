import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnlyEnglish]'
})
export class OnlyEnglishDirective {

  @HostBinding('class.notValid')
  private isNotValidKey = false;
  constructor() { }


  @HostListener('keypress', ['$event'])
  IsEnglish(event: KeyboardEvent) {
    console.log(event.keyCode);
    if (event.keyCode < 97 || event.keyCode > 122) {
      this.isNotValidKey = true;
      console.log('OnlyEnglishDirective is work!!');
      event.preventDefault();
      setTimeout(() => {this.isNotValidKey = false; }, 500);
    }
  }



}
