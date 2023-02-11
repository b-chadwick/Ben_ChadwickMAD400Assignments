import { Component, Input } from '@angular/core';
import { IContent } from '../models/icontent';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent {
  @Input() contentItem?: IContent;

  displayDetails(){
    console.log(this.contentItem?.id, this.contentItem?.description);
  }
}
