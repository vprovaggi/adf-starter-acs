import { Route } from '@angular/router';
import { SearchPluginComponent } from './search-plugin/search-plugin.component';

export const pluginRoutes: Route[] = [
  {
    path: '',
    component: SearchPluginComponent
  }
];
