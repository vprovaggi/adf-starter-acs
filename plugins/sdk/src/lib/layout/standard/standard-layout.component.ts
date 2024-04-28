import { Component, inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppSidebarComponent, AppToolbarComponent } from '../../components';
import { MAIN_ACTIONS_ENTRIES$, MAIN_NAVIGATION_ENTRIES$ } from '../../core';

export type StandardLayoutSettings = {
  showToolbar?: boolean;
  showSidebar?: boolean;
};

@Component({
  selector: 'app-standard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, AppToolbarComponent, AppSidebarComponent],
  templateUrl: 'standard-layout.component.html',
  styleUrls: ['standard-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StandardLayoutComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  
  @Input()
  showToolbar = true;
  
  @Input()
  showSidebar = true;
  
  sidebarEntries$ = inject(MAIN_NAVIGATION_ENTRIES$);
  headerEntries$ = inject(MAIN_ACTIONS_ENTRIES$)
  @ViewChild('sidebar')
  sidebar?: AppSidebarComponent;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      const settings = data['layout'] as StandardLayoutSettings;
      if (settings) {
        this.applySettings(settings);
      }
    });
  }

  private applySettings(settings: StandardLayoutSettings) {
    if (settings.showSidebar !== undefined) {
      this.showSidebar = settings.showSidebar;
    }

    if (settings.showToolbar !== undefined) {
      this.showToolbar = settings.showToolbar;
    }
  }
}
