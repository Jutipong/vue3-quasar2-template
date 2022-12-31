export interface IDrawer {
  label: string;
  path: string;
  icon?: string;
  // active: boolean;
  childrens?: IChildren[];
}

export interface IChildren {
  label: string;
  path: string;
  icon?: string;
  // active: boolean;
}
