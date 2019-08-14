export interface RowData {
  [col: string]: string
};

export interface WorksheetData {
  title: string,
  link: string,
};

export interface MenuItems {
  name: string,
  href?: string,
  panel?: any
}

export interface Settings {
  title: string,
  links: MenuItems[]
}