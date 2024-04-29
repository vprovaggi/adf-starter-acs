import { MainActionEntry } from '@app/sdk';

/** Default global application header entries */
export const appToolbar: Array<MainActionEntry> = [
  {
    text: 'APP.NAV.DOCUMENTS',
    action: ['router.navigate', ['/documents']]
  },
  {
    text: 'Page 1',
    action: ['router.navigate', ['/page1']]
  },
  {
    text: 'Page 2',
    action: ['router.navigate', ['/page2']]
  },
  {
    icon: 'search',
    text: 'Search',
    action: ['router.navigate', ['/search']]
  },
  {
    icon: '',
    text: 'Add',
    action: ['add.action'],
  }
];
