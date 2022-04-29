import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, PRIMARY_OUTLET, Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ContextMenuItem } from './context-menu-item/context-menu-item.model';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent implements OnInit, OnDestroy {
  items: ContextMenuItem[] = [];

  private readonly destroy$ = new Subject();

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
    this.route.data.subscribe(
      ({ contextMenuItems }) => (this.items = contextMenuItems)
    );

    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ({ x, y }) =>
          (this.elementRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`)
      );
  }

  private isClickOutside(event: MouseEvent): boolean {
    return !this.elementRef.nativeElement.contains(event.target);
  }

  private close(): void {
    const urlWithoutAuxiliaryRoute = this.router
      .createUrlTree(['.'], { relativeTo: this.route })
      .root.children[PRIMARY_OUTLET].toString();

    this.router.navigate([
      urlWithoutAuxiliaryRoute,
      { outlets: { [this.route.outlet]: null } },
    ]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
