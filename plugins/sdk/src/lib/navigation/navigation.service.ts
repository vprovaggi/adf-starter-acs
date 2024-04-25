import { Inject, Injectable, InjectionToken, Optional, Provider} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MainNavigationEntry } from './interface';
import { MainActionEntry } from '../types';
import { arrayToMultiToken } from '../utils';

export const MAIN_NAVIGATION_ENTRIES = new InjectionToken<MainNavigationEntry>('Injection token for application sidebar entries.');
export const MAIN_ACTIONS_ENTRIES = new InjectionToken<MainActionEntry>('Injection token for application header entries.');

@Injectable({ providedIn: 'root' })
export class NavigationService {
  /** Application header entries */
  headerEntries$: Observable<MainActionEntry[]>;

  /** Application sidebar entries */
  sidebarEntries$: Observable<MainNavigationEntry[]>;

  constructor(
    @Optional() @Inject(MAIN_ACTIONS_ENTRIES) headerEntries: MainActionEntry[],
    @Optional() @Inject(MAIN_NAVIGATION_ENTRIES) sidebarEntries: MainNavigationEntry[]
  ) {
    this.headerEntries$ = new BehaviorSubject(headerEntries).asObservable();    
    this.sidebarEntries$ = new BehaviorSubject(sidebarEntries).asObservable();
  }
}

export function provideNavigation(mainNavigation: MainNavigationEntry[], mainActions: MainActionEntry[]): Array<Provider> {

  return [
    arrayToMultiToken(MAIN_NAVIGATION_ENTRIES, mainNavigation),
    arrayToMultiToken(MAIN_ACTIONS_ENTRIES, mainActions)
  ]
}
