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
  const month = myDate.getMonth();
  console.log(month);
};
//得到月份
export const getMonth = (id: number) => {
  switch (id) {
    case 0:
      return "小排练厅";
    case 1:
      return "教室一二";
    case 2:
      return "教室三四";
    case 3:
      return "教室五六";
    case 4:
      return "钢琴排练房二";
    case 5:
      return "钢琴排练房三";
    case 6:
      return "钢琴排练房四";
    default:
      break;
  }
};
