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

  const { id, type } = params;
  const dataId = parseInt(id);
  const dataType = parseInt(type);
  let data = {
    id: 1,
    type: 0,
    title: "React源码这里的处理太妙了！",
    time: "一周前",
    user: "撒冷才不是小小蒙",
    introduce:
      "关于React的源码，一直是为大家津津乐道的,今天我们就来一起研究一下关于Vue源码中响应式的部分...",
    getLikes: 120,
    comment: 49,
    code: `console.log(abc);
    console.log(abc);
    console.log(abc);
    xxx.forEach(item=>{console.log(1)})`,
  };
  const detailDataRes = articleListData[dataType].filter((item) => {
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
