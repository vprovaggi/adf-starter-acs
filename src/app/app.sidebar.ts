import { MainNavigationEntry } from '@app/sdk';

/** Default global application sidebar entries */
export const appSidebar: Array<MainNavigationEntry> = [
  // Documents Plugin
  {
    text: 'APP.NAV.DOCUMENTS',
    icon: 'text_snippet',
    route: '/documents',
    
  },
  // Calendar Plugin
  {
    text: 'Calendar',
    icon: 'calendar_month',
    route: '/calendar',
    
  },
  // Custom application Page 1
  {
    text: 'Page 1',
    icon: 'task',
    route: '/page1',
    
  },
  // Custom application Page 2
  {
    text: 'Page 2',
    icon: 'assignment',
    route: '/page2',
    
  },
  // Trashcan Plugin
  {
    text: 'Trashcan',
    icon: 'delete',
    route: '/trashcan',
  }
];
