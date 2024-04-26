import { Inject, Injectable, InjectionToken, Optional, Provider} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MainNavigationEntry } from './types';
import { MainActionEntry } from '../actions';

const MAIN_NAVIGATION_ENTRIES = new InjectionToken<MainNavigationEntry>('Injection token for application sidebar entries.');
const MAIN_ACTIONS_ENTRIES = new InjectionToken<MainActionEntry>('Injection token for application header entries.');

export abstract class NavigationState {
  abstract mainActions$: Observable<MainActionEntry[]>;
  abstract mainNavItems$: Observable<MainNavigationEntry[]>;
}
export interface EditableNavigationState extends NavigationState {
  addNavItem(item : MainNavigationEntry): void,
  removeNavItem(item: MainActionEntry): void,
}

@Injectable( {
  providedIn: 'root'
}
)
class NavigationService extends NavigationState {
  /** Application header entries */
  private _actionsEntries$ : BehaviorSubject<MainActionEntry[]>;
  mainActions$: Observable<MainActionEntry[]>;
  /** Application sidebar entries */
  private _navEntries$ : BehaviorSubject<MainNavigationEntry[]>;
  mainNavItems$: Observable<MainNavigationEntry[]>;

  constructor(
    @Optional() @Inject(MAIN_ACTIONS_ENTRIES) headerEntries: MainActionEntry[],
    @Optional() @Inject(MAIN_NAVIGATION_ENTRIES) sidebarEntries: MainNavigationEntry[],
  ) {
    super();
    this._navEntries$ =  new BehaviorSubject<Array<MainNavigationEntry>>(sidebarEntries);
    this._actionsEntries$ = new BehaviorSubject<Array<MainActionEntry>>(headerEntries);
    
    this.mainActions$ = this._actionsEntries$.asObservable();    
    this.mainNavItems$ = this._navEntries$.asObservable();
  }
  
}

export function provideNavigation(mainNavigation: MainNavigationEntry[], mainActions: MainActionEntry[]): Array<Provider> {
  return [
    {provide: MAIN_NAVIGATION_ENTRIES, useValue: mainNavigation},
    {provide: MAIN_ACTIONS_ENTRIES, useValue: mainActions},
    {provide: NavigationState, useExisting: NavigationService}
  ]
}
