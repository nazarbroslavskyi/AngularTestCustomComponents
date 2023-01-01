import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { VdeAttributeDirective } from './slate-vd-directive';

@Component({
  template: `
    <div class="vde-attribute-test"
         [slateVdeAttr]="'attribute-test'"
         [attrValue]="'someValue'"></div>
  `,
})
class TestComponent {}

describe('Slate Attribute Directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  const selector = '.vde-attribute-test';

  const getElBySelector = (sel: string): HTMLElement =>
    fixture.nativeElement.querySelector(sel) || null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, VdeAttributeDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

    it('should attached attribute to element', (() => {
      expect(getElBySelector(selector).hasAttribute('data-vde-attribute-test')).toEqual(true);
    }));

    it('should attached attribute to element with specified value', fakeAsync(() => {
      const element = getElBySelector(selector);

      expect(element.matches('[data-vde-attribute-test="someValue"]')).toEqual(true);
    }));
});
