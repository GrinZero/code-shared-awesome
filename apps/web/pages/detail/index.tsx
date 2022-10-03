import style from "./index.module.css";
import { IconHeartFill, IconStarFill } from "@arco-design/web-react/icon";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import { useEffect, useState } from "react";
import React, { FC } from "react";
import { articleDetail } from "api-sdk";
import { Code } from "../../type";
import MyComment from "../../components/comment";
const Detail: FC = () => {
  const [code, setCode] = useState<Code>();
  useEffect(() => {
    //获取右边代码数据
    let getData = async () => {
      const result = await articleDetail(1);
      const listData = result.data;
      setCode(listData);
    };
    getData();
    // 配置 highlight.js
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
  }, [code]);
  return (
    <div className={style["content"]}>
      <div className={style["head"]}>
        <div className={style["head_l"]}>Code Show</div>
        <div className={style["head_r"]}>
          <div className={style["avatar"]}></div>
        </div>
      </div>
      <div className={style["container"]}>
        <MyComment></MyComment>
        {code ? (
          <div className={style["code"]}>
            <h2 className={style["title"]}>{code.title}</h2>
            <div className={style["author_info"]}>
              <div className={style["author_det"]}>
                <div className={style["author_avatar"]}></div>

                <div className={style["detail"]}>
                  <p className={style["author_name"]}>{code.user}</p>
                  <p className={style["article_det"]}>
                    <p>{code.time}</p>
                    <p className={style["read"]}>阅读量 283384</p>
                  </p>
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
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Detail;
