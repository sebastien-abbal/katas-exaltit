export interface BigParsingUser {
  id: number;
  name: string;
}

export interface DataItem {
  name?: string;
  job?: string;
  city?: string;
  age?: number;
}

export interface DataFixed {
  [key: string]: boolean;
}
