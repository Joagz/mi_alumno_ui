
export interface ILink {
  url: string;
  name: string;
  sublinks?: ILink[];
}