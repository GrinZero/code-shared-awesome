import dayjs from "dayjs";
var localizedFormat = require("dayjs/plugin/localizedFormat");
export const topNavBar = ["推荐", "人工智能", "前端", "后端", "算法"];
export const comment = [
  {
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
  },
  {
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
  },
  {
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
  },
  {
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
  },
  {
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
  },
];
/**
 * 得到时间
 */
export const getTime = () => {
  const myDate = new Date();

  dayjs.extend(localizedFormat);
  const time = dayjs().format("ll");
  const detT = dayjs().format("llll");
  let obj: {
    month: string;
    day: string;
    detTime: string;
  } = {
    detTime: detT,
    month: time.substring(0, 3),
    day: time.slice(4, 5),
  };
  return obj;
};

export const classify = [
  "人工智能",
  "前端",
  "后端",
  "算法",
  "Android",
  "开发工具",
];

export const menus = [
  { title: "动态", key: "0" },
  { title: "发布", key: "1" },
  { title: "关注", key: "2" },
  { title: "收藏", key: "3" },
  { title: "评论", key: "4" },
];
export const follows = [
  { id: 0, name: "张三", comment: "红红火火恍恍惚惚或或或" },
  { id: 1, name: "李四", comment: "啊啊啊啊啊啊啊啊啊啊啊啊啊" },
  { id: 2, name: "王五", comment: "啛啛喳喳错错错错错错错错错" },
];
