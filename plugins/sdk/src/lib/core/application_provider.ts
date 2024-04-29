import { Provider } from "@angular/core";
import { ApplicationDescriptor } from "./types";
import { Application } from "./application";
import { MAIN_ACTIONS_ENTRIES$, MAIN_NAVIGATION_ENTRIES$, APP_DESCRIPTOR } from "./tokens";

export function provideApplication(descriptor: ApplicationDescriptor) : Provider[] {

    const providers = [
        { provide: APP_DESCRIPTOR, useValue: descriptor},
        { provide: MAIN_ACTIONS_ENTRIES$, useFactory: mainAction, deps: [Application]},
        { provide: MAIN_NAVIGATION_ENTRIES$, useFactory: mainNavigation, deps: [Application]}]
    return providers;
}

function mainAction(application: Application) {
    return application.mainActions$;
}
function mainNavigation(application: Application) {
    return application.mainNavigation$;
}