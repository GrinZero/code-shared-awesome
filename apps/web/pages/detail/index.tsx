import style from "./index.module.css";
import { IconHeartFill, IconStarFill } from "@arco-design/web-react/icon";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import { useEffect, useState } from "react";
import React, { FC } from "react";
import { getArticleDetail, getComment } from "api-sdk";
import { Code, Comment } from "../../type";
import MyComment from "../../components/comment";
import { useRouter } from "next/router";

const Detail: FC = () => {
  const router = useRouter();
  const { id, type } = router.query;
  console.log("参数", id, type);
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
        const commentRes = await getComment();
        const comments = commentRes.data;
        setComments(comments);
        setCode(listData);
      }
    };
    getData();
  }, []);
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
  console.log(comments);

  return (
    <div className={style["content"]}>
      <div className={style["head"]}>
        <div className={style["head_l"]}>Code Show</div>
        <div className={style["head_r"]}>
          <div className={style["avatar"]}></div>
        </div>
      </div>
      <div className={style["container"]}>
        {comments && <MyComment comment={comments}></MyComment>}

        <div className={style["code"]}>
          {code ? (
            <>
              <h2 className={style["title"]}>{code.title}</h2>
              <div className={style["author_info"]}>
                <div className={style["author_det"]}>
                  <div className={style["author_avatar"]}></div>

                  <div className={style["detail"]}>
                    <p className={style["author_name"]}>{code.user}</p>
                    <div className={style["article_det"]}>
                      <p>{code.time}</p>
                      <p className={style["read"]}>阅读量 283384</p>
                    </div>
                  </div>
                </div>
                <button className={style["focus"]}>+ 关注</button>
              </div>

              <div className={style["dg-html"]}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<pre> <code>${code.code}</code> </pre>`,
                  }}
                />
              </div>
              <div className={style["operation"]}>
                <p>
                  <IconHeartFill className={style["like"]} />
                </p>
                <p>
                  <IconStarFill className={style["collect"]} />
                </p>
                <p>
                  <span className={style["fork"]}>fork</span>
                </p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default Detail;
