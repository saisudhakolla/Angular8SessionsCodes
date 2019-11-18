import { Directive,
  ElementRef, 
  HostListener, Renderer  } from '@angular/core';

@Directive({
  selector: '#span,h3[appMakeitbold]'
})
export class MakeitboldDirective {

  constructor(private el: ElementRef, 
    private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.makeItBold(true);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.makeItBold(false);
  }



  private makeItBold(inputValue: boolean) {
    if(inputValue)
      this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'bold');
    else
      this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'normal');
    }

}
