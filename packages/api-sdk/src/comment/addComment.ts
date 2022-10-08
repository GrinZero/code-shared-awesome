import type { Api } from "../types";
import { addComment } from "../utils";

interface addCommentDetail {
  id: string;
  author: string;
  det: string;
  time: string;
  getLike: number;
  getcollect: number;
}
type finishAddComment = addCommentDetail[];
export const AddComment: Api<finishAddComment, addCommentDetail> = async (
  param
) => {
  return {
    status: "ok",
    data: addComment(param!),
  };
};
