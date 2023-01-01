import {
  Directive,
  OnChanges,
  Input,
  Renderer2,
  ElementRef,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[slateVdeAttr]',
})
export class VdeAttributeDirective implements OnChanges {
  private readonly attrDefaultPrevix = 'data-vde-';

  @Input() slateVdeAttr: any;
  @Input() attrValue: any = '';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.slateVdeAttr || changes.attrValue) {
      this.renderer.setAttribute(
        this.elementRef.nativeElement,
        `${this.attrDefaultPrevix}${this.slateVdeAttr}`,
        this.attrValue
      );
    }
  }
}
