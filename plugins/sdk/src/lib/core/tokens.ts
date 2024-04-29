import { InjectionToken, Provider } from "@angular/core";
import { ApplicationDescriptor, MainActionEntry, MainNavigationEntry } from "./types";
import { Observable } from "rxjs";

export const APP_DESCRIPTOR = new InjectionToken<ApplicationDescriptor>("application descriptor");

export const MAIN_NAVIGATION_ENTRIES$ = new InjectionToken<Observable<MainNavigationEntry[]>>('Injection token for application sidebar entries.');
export const MAIN_ACTIONS_ENTRIES$ = new InjectionToken<Observable<MainActionEntry[]>>('Injection token for application header entries.');
