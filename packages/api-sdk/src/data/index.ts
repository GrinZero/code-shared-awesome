export const articleListData = [
  [
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
  ],
  [
    {
      id: 3,
      type: 6,
      title: "前端也学一下 Lua 呀",
      time: "2022年3月10日",
      user: "健康大数据",
      introduce:
        "现在，我们想搁置当前的 RFC，计划发布一个不同的、范围更小的 RFC 来取代这个 RFC。由于新的 RFC 的作用域不同，我们也许会给 useEvent 一个不同的名字。",
      getLikes: 140,
      comment: 43,
      code: `function fn_name(params,fn)
      -- your lua function code
  end
  fn_name("a", function(p)
      return a
   end
   );`,
    },
  ],
  [
    {
      id: 4,
      type: 4,
      title: "React源码这里的处理太妙了！",
      time: "一周前",
      user: "小蒙",
      introduce: "今天我们就来一起研究一下关于Vue源码中响应式的部分...",
      getLikes: 100,
      comment: 40,
      code: `console.log(abc);
      console.log(abc);
      console.log(abc);
      xxx.forEach(item=>{console.log(1)})`,
    },
  ],
  [
    {
      id: 5,
      type: 5,
      title: "面试官为啥总是让我们手撕call、apply、bind?",
      time: "三天前",
      user: "活动空间小小",
      introduce: "我发现了一个React、Vue等所有前端框架都存在的隐秘Bug？",
      getLikes: 140,
      comment: 43,
      code: `console.log(abc);
      console.log(abc);
      console.log(abc);
      xxx.forEach(item=>{console.log(1)})`,
    },
  ],
  [
    {
      id: 6,
      type: 3,
      title: "React源码这里的处理太妙了！",
      time: "2022年9月8日",
      user: "小太阳",
      introduce:
        "其实上面这段话已经很好地道出了call的真正作用，改变函数的作用域。这里先说一下，不管是call,还是apply都是冒用借充函数。",
      getLikes: 140,
      comment: 43,
      code: `const mbs = {
        name: '麻不烧',
        say(prefix, age) {
          console.log(sssss)
        }
      }
      const A = {
        name:'小丁'
      }
      mbs.say.call(A,'hello',3) // 'hello,my name is 小丁,i am 3 year old'
      `,
    },
  ],
];

export const CommentList = [
  {
    id: "0",
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
    getLike: 32,
    getcollect: 10,
  },
  {
    id: "1",
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
    getLike: 32,
    getcollect: 10,
  },
  {
    id: "2",
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
    getLike: 32,
    getcollect: 10,
  },
  {
    id: "3",
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
    getLike: 32,
    getcollect: 10,
  },
  {
    id: "4",
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
    getLike: 32,
    getcollect: 10,
  },
  {
    id: "5",
    author: "lijiayan",
    det: "真不错",
    time: "1 hour ago",
    getLike: 32,
    getcollect: 10,
  },
];
