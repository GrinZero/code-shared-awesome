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

export const getArticleList: Api<articleList> = async () => {
  return {
    status: "ok",
    data: articleListData,
  };
};
