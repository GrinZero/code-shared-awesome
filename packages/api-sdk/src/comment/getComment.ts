import { CommentList } from "../data";
import type { Api } from "../types";
import { getCurComment } from "../utils";

interface CommentResult {
  id: string;
  author: string;
  det: string;
  time: string;
  getLike: number;
  getcollect: number;
}
type CommentDataResult = CommentResult[];
type getCommentParam = string;
export const getComment: Api<CommentDataResult, getCommentParam> = async (
  param
) => {
  return {
    status: "ok",
    data: getCurComment(param!),
  };
};
