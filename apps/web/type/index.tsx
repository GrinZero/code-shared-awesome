export interface AppProps {
  Component: () => JSX.Element;
}
export interface WebProp {
  id: number;
  type: number;
  title: string;
  time: string;
  user: string;
  introduce: string;
  getLikes: number;
  comment: number;
}
[];
export type WebProps = WebProp[];

export interface Code {
  id: number;
  type: number;
  title: string;
  time: string;
  user: string;
  introduce: string;
  getLikes: number;
  comment: number;
  code: string;
}
