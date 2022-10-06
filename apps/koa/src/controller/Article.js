// import {command} from '../service/mysql'
const articles = [
  {
    id: 1,
    type: 9,
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
  },
  {
    id: 2,
    type: 8,
    title: "React 新提案 useEvent 已死？不，它将涅盘重生。",
    time: "一周前",
    user: "哈哈哈哈哈",
    introduce:
      "key是vue中虚拟dom标记的唯一标识，通过这个key，diff算法能更加准确和快捷。不使用key的情况下，因为vue的就地更新会选择复用节点，之前的状态被保存，可能会产生一系列的bug",
    getLikes: 140,
    comment: 43,
    code: `var str1="HELLO"
    var str2="123HELLO"
    num1 = Number( str1 );
    num2 = Number( str2 );
    console.log(num1);
    console.log(num2);`,
  },
];
const Article = {
  async findAll({ pageIndex, pageSize, type }) {
    console.log(pageIndex, pageSize, type);
    return articles;
  },
  async findOne(id) {
    console.log(id, "id");
    return articles[id];
  },
  async create(article) {
    console.log(article);
    return article;
  },
  async update(article) {
    console.log(article);
    return null;
  },
  async delete(id) {
    console.log(id, "id");
    return null;
  },
};
export default Article;
