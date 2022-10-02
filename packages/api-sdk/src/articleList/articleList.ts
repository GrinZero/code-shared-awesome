import type { Api } from "../types";
export type articleList = {
  id: number;
  type: number;
  title: string;
  time: string;
  user: string;
  introduce: string;
  getLikes: number;
  comment: number;
}[];
export type ListResult = articleList[];

export const getArticleList: Api<ListResult> = async () => {
  return {
    status: "ok",
    data: [
      [
        {
          id: 1,
          type: 0,
          title: "React源码这里的处理太妙了！",
          time: "一周前",
          user: "撒冷才不是小小蒙",
          introduce:
            "关于React的源码，一直是为大家津津乐道的,今天我们就来一起研究一下关于Vue源码中响应式的部分...",
          getLikes: 120,
          comment: 49,
        },
        {
          id: 2,
          type: 0,
          title: "React 新提案 useEvent 已死？不，它将涅盘重生。",
          time: "一周前",
          user: "哈哈哈哈哈",
          introduce:
            "key是vue中虚拟dom标记的唯一标识，通过这个key，diff算法能更加准确和快捷。不使用key的情况下，因为vue的就地更新会选择复用节点，之前的状态被保存，可能会产生一系列的bug",
          getLikes: 140,
          comment: 43,
        },
      ],
      [
        {
          id: 3,
          type: 1,
          title: "React源码这里的处理太妙了！",
          time: "一周前",
          user: "撒冷才不是小小蒙",
          introduce:
            "现在，我们想搁置当前的 RFC，计划发布一个不同的、范围更小的 RFC 来取代这个 RFC。由于新的 RFC 的作用域不同，我们也许会给 useEvent 一个不同的名字。",
          getLikes: 140,
          comment: 43,
        },
      ],
      [
        {
          id: 4,
          type: 2,
          title: "React源码这里的处理太妙了！",
          time: "一周前",
          user: "小蒙",
          introduce: "今天我们就来一起研究一下关于Vue源码中响应式的部分...",
          getLikes: 100,
          comment: 40,
        },
      ],
      [
        {
          id: 5,
          type: 2,
          title: "React源码这里的处理太妙了！",
          time: "一周前",
          user: "活动空间小小蒙",
          introduce: "我发现了一个React、Vue等所有前端框架都存在的隐秘Bug？",
          getLikes: 140,
          comment: 43,
        },
      ],
      [
        {
          id: 6,
          type: 2,
          title: "React源码这里的处理太妙了！",
          time: "一周前",
          user: "小太阳",
          introduce:
            "关于React的源码，一直是为大家津津乐道的,今天我们就来一起研究一下关于Vue源码中响应式的部分...",
          getLikes: 140,
          comment: 43,
        },
      ],
    ],
  };
};
