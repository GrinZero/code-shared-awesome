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
const MyCode: FC<CodeProps> = (props) => {
  const { code } = props;
  const [like, setLike] = useState(false);
  const [star, setStar] = useState(false);
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

      <div className={style["dg-html"]}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<pre> <code>${code.code}</code> </pre>`,
          }}
        />
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
