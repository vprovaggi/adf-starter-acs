import { VisualToken } from "../types";


export type MainNavigationEntry = VisualToken & {
    route: string,
    canBeActivated?: () => boolean
  };