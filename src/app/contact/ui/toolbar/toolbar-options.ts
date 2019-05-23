import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
  isEnabled: boolean;
  title: string;
  actions: ToolbarAction[];

  constructor(isEnabled: boolean, title: string, actions: ToolbarAction[]) {
    this.isEnabled = isEnabled;
    this.title = title;
    this.actions = actions;
  }
}
