import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auxiliary-routes-example';

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    this.router.navigate([
      { outlets: { context: ['menu', event.x, event.y] } },
    ]);

    event.preventDefault();
  }

  constructor(private router: Router) {}
}
