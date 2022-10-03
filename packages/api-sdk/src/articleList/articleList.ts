import { articleListData } from "../data";
import type { Api } from "../types";
type articleList = {
  id: number;
  type: number;
  title: string;
  time: string;
  user: string;
  introduce: string;
  getLikes: number;
  comment: number;
  code: string;
}[];
type ListResult = articleList[];

export const getArticleList: Api<ListResult> = async () => {
  return {
    status: "ok",
    data: articleListData,
  };
};
