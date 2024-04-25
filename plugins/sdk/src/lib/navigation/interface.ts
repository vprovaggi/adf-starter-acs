

export type MainNavigationEntry = {
    text: string;
    icon?: string;
    route: string,
    canBeActivated?: () => boolean
  };