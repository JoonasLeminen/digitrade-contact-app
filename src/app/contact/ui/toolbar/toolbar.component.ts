import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarServiceService} from '../../services/toolbar-service.service';
import {ToolbarOptions} from './toolbar-options';

@Component({
  selector: 'dtca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() MenuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarServiceService) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
    });
  }

  onMenuClick() {
    this.MenuClick.emit();
  }

  onNavigateBack() {
    console.log('moti');
  }
}
