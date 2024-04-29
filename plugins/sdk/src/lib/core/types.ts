import { Routes } from "@angular/router"


export type VisualToken = {
    icon?: string,
    text : string
}
export type MainNavigationEntry = VisualToken & {
    route: string,
    canBeActivated?: () => boolean
  };

export type UiAction = [string] | [string, unknown[]];

export type MainActionEntry = VisualToken & {
  action: UiAction;
};


export type PluginType= 'applet' | 'behaviour'

export type AppPlugin = {
    name: string,
    version: string,
    uri: string,
    plugin_type : PluginType
}
export type ApplicationDescriptor = {
    name: string,
    available_plugins: Array<AppPlugin>,
    routes: Routes,
    main_navigation: Array<MainNavigationEntry>
    main_actions: Array<MainActionEntry>
}