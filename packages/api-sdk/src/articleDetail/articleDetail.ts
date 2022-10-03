import type { Api } from "../types";
import { filterData } from "../utils";
interface DetailResult {
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
interface DetailParams {
  id: string;
  type: string;
}
export const getArticleDetail: Api<DetailResult, DetailParams> = async (
  params
) => {
  return {
    status: "ok",
    data: filterData(params!),
  };
};
