import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  private highlight(color: string | null): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  // @Input() color: string = '';
  @Input() appHighlight: string = '';
  @Input() defaultColor = 'blue';

  @HostListener('mouseenter') onMouseEnter(): void {
    // this.highlight(this.color);
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }
}
