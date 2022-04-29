import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent implements OnInit {
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
    this.route.params.subscribe(({ x, y }) => {
      this.elementRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  private isClickOutside(event: MouseEvent): boolean {
    return !this.elementRef.nativeElement.contains(event.target);
  }

  private close(): void {
    this.router.navigate([{ outlets: { context: null } }]);
  }
}
