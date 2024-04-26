import { VisualToken } from "../types";

export type UiAction = [string] | [string, unknown[]];

export type MainActionEntry = VisualToken & {
  action: UiAction;
};
