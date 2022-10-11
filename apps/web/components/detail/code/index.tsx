import React, { FC, useState } from "react";
import style from "./index.module.css";
import {
  IconHeartFill,
  IconStarFill,
  IconBranch,
  IconHeart,
  IconStar,
} from "@arco-design/web-react/icon";
import { CodeProps } from "../../../types";
import copy from "copy-to-clipboard";
import { Message } from "@arco-design/web-react";
const MyCode: FC<CodeProps> = ({
  code = {
    id: 0,
    type: 0,
    title: "",
    time: "",
    user: "",
    introduce: "",
    getLikes: 0,
    comment: 0,
    code: "",
  },
}) => {
  // const { code } = props;
  const [like, setLike] = useState(false);
  const [star, setStar] = useState(false);
  const [isHover, setHover] = useState(false);
  const handleCopy = (value: string) => {
    if (copy(value)) {
      Message.success({
        content: "复制成功",
        duration: 1000,
      });
    } else
      Message.warning({
        content: "复制失败",
        duration: 1000,
      });
  };
  return (
    <div className={style["code"]}>
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

      <div
        className={style["dg-html"]}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<pre> <code>${code.code}</code> </pre>`,
          }}
        />
        <div
          className={isHover ? style["hover"] : style["unhover"]}
          onClick={() => handleCopy(code.code)}
        >
          复制代码
        </div>
      </div>
      <div className={style["operation"]}>
        <p onClick={() => setLike(!like)}>
          {like ? (
            <IconHeartFill className={style["like"]} />
          ) : (
            <IconHeart className={style["unlike"]} />
          )}
        </p>
        <p onClick={() => setStar(!star)}>
          {star ? (
            <IconStarFill className={style["collect"]} />
          ) : (
            <IconStar className={style["uncollect"]} />
          )}
        </p>
        <p>
          <span className={style["fork"]}>
            <IconBranch />
          </span>
        </p>
      </div>
    </div>
  );
};
export default MyCode;
