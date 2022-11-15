export interface Section {
  name: string;
  column: {
    id: number;
    category: number;
    title: string;
    path: string;
    special?: boolean;
  }[];
}
