import { type } from "os";

export interface AppProps {
  Component: () => JSX.Element;
}
export interface ListProp {
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
[];
export type ListDataProps = ListProp[];

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
interface CommentObj {
  author: string;
  det: string;
  time: string;
  getLike: number;
  getcollect: number;
}
export type Comment = CommentObj[];
export interface CommentProps {
  comment: Comment;
  author: string;
  id: string | string[] | undefined;
}
export interface CodeProps {
  code: Code;
}

interface articleList {
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

export interface HomeLeftProps {
  listData: articleList[];
}

export interface ArticleListProps {
  listData: articleList[];
  activeIndex: number;
}
