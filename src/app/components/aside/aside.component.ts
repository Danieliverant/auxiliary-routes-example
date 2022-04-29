import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';
import { AsideItem, globalAsideItems } from './aside-item/aside-item.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  items: AsideItem[] = globalAsideItems;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    if (this.isClickOutside(event)) {
      this.close();
    }
  }

  constructor(private elementRef: ElementRef, private router: Router) {}

  private isClickOutside(event: MouseEvent): boolean {
    return !this.elementRef.nativeElement.contains(event.target);
  }

  private close(): void {
    this.router.navigate([{ outlets: { aside: null } }]);
  }
}
