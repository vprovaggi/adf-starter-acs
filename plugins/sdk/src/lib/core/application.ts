import { Injectable, inject } from "@angular/core";
import { MainActionEntry, MainNavigationEntry } from "./types";
import { BehaviorSubject, Observable } from "rxjs";
import { APP_DESCRIPTOR } from "./tokens";


@Injectable( {
    providedIn:"root"
})
export class Application {

    private readonly descriptor = inject(APP_DESCRIPTOR);
    private readonly _mainActions$: BehaviorSubject<MainActionEntry[]> = new BehaviorSubject<MainActionEntry[]>(this.descriptor.main_actions);
    private readonly _mainNavigation$: BehaviorSubject<MainNavigationEntry[]> = new BehaviorSubject<MainNavigationEntry[]>(this.descriptor.main_navigation);

    mainActions$: Observable<MainActionEntry[]> = this._mainActions$.asObservable();
    mainNavigation$: Observable<MainNavigationEntry[]> = this._mainNavigation$.asObservable();
}

