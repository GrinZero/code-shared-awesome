import style from "./index.module.css";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import { useEffect, useState } from "react";
import React, { FC } from "react";
import { getArticleDetail, getComment } from "api-sdk";
import { Code, Comment } from "../../types";
import { useRouter } from "next/router";
import MyComment from "../../components/detail/comment";
import MyHeader from "../../components/detail/Header";
import MyCode from "../../components/detail/code";
const Detail: FC = () => {
  const router = useRouter();
  const { id, type } = router.query;
  const [code, setCode] = useState<Code>();
  const [comments, setComments] = useState<Comment>();
  useEffect(() => {
    //获取右边代码数据
    let getData = async () => {
      //右边代码部分
      if (typeof id == "string" && typeof type == "string") {
        const coderesult = await getArticleDetail({ id: id, type: type });
        const listData = coderesult.data;
        //评论
        const commentRes = await getComment(id);
        const comments = commentRes.data;
        setComments(comments);
        setCode(listData);
      }
    };
    getData();
  }, [id, type]);
  useEffect(() => {
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll("pre code");
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el as HTMLElement);
    });
  });
  console.log("评论", comments);
  console.log("daima", code);

  return (
    <div className={style["content"]}>
      <MyHeader></MyHeader>
      <div className={style["container"]}>
        {comments && code && (
          <MyComment comment={comments} author={code.user} id={id}></MyComment>
        )}
        {code && <MyCode code={code}></MyCode>}
      </div>
    </div>
  );
};
export default Detail;
