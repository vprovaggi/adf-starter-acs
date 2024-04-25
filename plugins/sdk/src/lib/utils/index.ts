import { InjectionToken, Provider } from "@angular/core";

export function arrayToMultiToken<T>(token: InjectionToken<T>, entries: Array<T>): Provider {
    return entries.map( (e) => ({ provide: token, multi: true, useValue: e }))
  }