import { Directive, inject } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[spartanNavLink]',
  standalone: true,
  hostDirectives: [
    HlmButtonDirective,
    {
      directive: RouterLink,
      inputs: ['routerLink: spartanNavLink'],
    },
    RouterLinkActive,
  ],
})
export class NavLinkDirective {
  private _hlmBtn = inject(HlmButtonDirective);
  private _rlActive = inject(RouterLinkActive);

  constructor() {
    this._hlmBtn.variant = 'link';
    this._hlmBtn.size = 'sm';
    this._hlmBtn.class = 'opacity-70 font-medium';
    this._rlActive.routerLinkActive = '!opacity-100';
  }
}
