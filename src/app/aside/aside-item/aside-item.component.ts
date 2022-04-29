import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsideItem } from './aside-item.model';

@Component({
  selector: 'app-aside-item',
  templateUrl: './aside-item.component.html',
  styleUrls: ['./aside-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideItemComponent {
  @Input() item: AsideItem;
}
