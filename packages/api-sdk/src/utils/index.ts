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
  console.log("哈哈哈", params);

  const { id } = params;
  const dataId = parseInt(id);
  const detailDataRes = articleListData.filter((item) => {
    return item.id == dataId;
  });

  return detailDataRes[0];
};

//得到这一条文章的评论
export const getCurComment = (param: getCurCommentParam) => {
  console.log("执行得到评论", CommentList);

  const curCommentList = CommentList.filter((item) => {
    return item.id === param;
  });
  console.log("现在", curCommentList);

  return curCommentList;
};
// 添加评论
export const addComment = (params: commentParams) => {
  console.log("push之前原数组", CommentList);

  CommentList.push(params);
  console.log("push之后原数组", CommentList);
  const curComments = getCurComment(params.id);
  return curComments;
};
