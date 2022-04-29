import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    this.openContextMenu(event);
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  private openContextMenu(event: MouseEvent): void {
    const urlWithoutAuxiliaryRoute = this.router
      .createUrlTree([], { relativeTo: this.route })
      .root.children[PRIMARY_OUTLET].toString();

    this.router.navigate([
      urlWithoutAuxiliaryRoute,
      { outlets: { 'context-menu': [event.x, event.y] } },
    ]);

    event.preventDefault();
  }
}
