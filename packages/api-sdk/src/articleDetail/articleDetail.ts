import type { Api } from "../types";
export interface DetailResult {
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
export type DetailParams = number;
const code = `console.log(abc);
console.log(abc);
console.log(abc);
xxx.forEach(item=>{console.log(1)})`;
export const getArticleDetail: Api<DetailResult, DetailParams> = async (id) => {
  return {
    status: "ok",
    data: {
      id: 1,
      type: 0,
      title: "React源码这里的处理太妙了！",
      time: "一周前",
      user: "撒冷才不是小小蒙",
      introduce:
        "关于React的源码，一直是为大家津津乐道的,今天我们就来一起研究一下关于Vue源码中响应式的部分...",
      getLikes: 120,
      comment: 49,
      code: code,
    },
  };
};
