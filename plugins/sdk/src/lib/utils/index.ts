import { InjectionToken, Provider } from "@angular/core";

/**
 * 
 * @param token Angular Injection Token
 * @param entries array of entries to add to the token
 * @returns Agnular Provider
 */
export function arrayToMultiToken<T>(token: InjectionToken<T>, entries: Array<T>): Provider {
    return entries.map( (e) => ({ provide: token, multi: true, useValue: e }))
  }