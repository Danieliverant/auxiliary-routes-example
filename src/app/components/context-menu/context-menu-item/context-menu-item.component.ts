import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContextMenuItem } from './context-menu-item.model';

@Component({
  selector: 'app-context-menu-item',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuItemComponent {
  @Input() item: ContextMenuItem;
}

