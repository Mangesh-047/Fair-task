import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavClick]'
})
export class NavClickDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onNavbtnClick(eve: Event) {
    let ele = eve.target as HTMLElement

    ele.closest('button')?.nextElementSibling?.classList.toggle('show')
  }
}
