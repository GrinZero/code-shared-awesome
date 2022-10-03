import type { Api } from "../types";

interface CommentResult {
  author: string;
  det: string;
  time: string;
  getLike: number;
  getcollect: number;
}
type CommentDataResult = CommentResult[];
export const getComment: Api<CommentDataResult> = async () => {
  return {
    status: "ok",
    data: [
      {
        author: "lijiayan",
        det: "真不错",
        time: "1 hour ago",
        getLike: 32,
        getcollect: 10,
      },
    ],
  };
};
