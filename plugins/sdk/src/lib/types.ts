export type UiAction = [string] | [string, unknown[]];

export type MainActionEntry = {
  text: string;
  icon?: string;
  action: UiAction;
};
