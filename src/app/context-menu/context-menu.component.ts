import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ContextMenuItem} from "./context-menu-items.model";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent implements OnInit {
  items: ContextMenuItem[] = [];

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    if (this.isClickOutside(event)) {
      this.close();
    }
  }

  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(tap(console.log)).subscribe(({contextMenuItems}) => this.items = contextMenuItems);

    this.route.params.subscribe(({ x, y }) => {
      this.elementRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  private isClickOutside(event: MouseEvent): boolean {
    return !this.elementRef.nativeElement.contains(event.target);
  }

  private close(): void {
    this.router.navigate([...this.route.parent.snapshot.url, { outlets: { context: null } }]);
  }
}
