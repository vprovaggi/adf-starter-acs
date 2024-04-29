import { ApplicationDescriptor } from "@app/sdk";
import { appSidebar } from "./app.sidebar";
import { appToolbar } from "./app.toolbar";
import { appRoutes } from "./app.routes";

export const appDescriptor : ApplicationDescriptor = {
    name: "My light application",
    available_plugins: [],
    routes: [...appRoutes],
    main_navigation: [...appSidebar],
    main_actions: [...appToolbar]
}