import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

const OUTLET_REGEX = / *\([^)]*\) */g;

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

  constructor(private router: Router) {}

  private openContextMenu(event: MouseEvent): void {
    this.router.navigate([
      this.router.url.replace(OUTLET_REGEX, ''),
      { outlets: { context: ['menu', event.x, event.y] } },
    ]);

    event.preventDefault();
  }
}
