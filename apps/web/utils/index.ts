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
