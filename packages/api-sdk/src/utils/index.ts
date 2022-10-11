import { articleListData, CommentList } from "../data";
interface fileterDataParams {
  id: string;
  type: string;
}
interface commentParams {
  id: string;
  author: string;
  det: string;
  time: string;
  getLike: number;
  getcollect: number;
}
type getCurCommentParam = string;

// 根据id筛选具体是那一条文章
export const filterData = (params: fileterDataParams) => {
  const { id } = params;
  const dataId = parseInt(id);
  const detailDataRes = articleListData.filter((item) => {
    return item.id == dataId;
  });
  return detailDataRes[0];
};

//得到这一条文章的评论
export const getCurComment = (param: getCurCommentParam) => {
  const curCommentList = CommentList.filter((item) => {
    return item.id === param;
  });
  return curCommentList;
};
// 添加评论
export const addComment = (params: commentParams) => {
  CommentList.push(params);
  const curComments = getCurComment(params.id);
  return curComments;
};
