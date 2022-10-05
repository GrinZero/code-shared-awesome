import React, { FC } from "react";
import { ArticleListProps } from "../../types";
import style from "./index.module.css";
import Router from "next/router";
import { IconThumbUp, IconMessage } from "@arco-design/web-react/icon";
const ArticleList: FC<ArticleListProps> = (props) => {
  const { listData, activeIndex } = props;
  function goTodetail(id: number) {
    Router.push({
      pathname: "/detail",
      query: { id: id, type: activeIndex },
    });
  }
  return (
    <div className={style["list"]}>
      <ul>
        {listData[activeIndex].map((item) => {
          return (
            <li key={item.id}>
              <div onClick={() => goTodetail(item.id)}>
                <div className={style["title"]}>{item.title}</div>
                <div className={style["describe"]}>
                  {item.user} | {item.time}
                </div>
                <div className={style["detail"]}>{item.introduce}</div>
              </div>
              <div className={style["article_info"]}>
                <div className={style["dianzan"]}>
                  <span>
                    <IconThumbUp />{" "}
                  </span>
                  <span>{item.getLikes}</span>
                </div>
                <div className={style["commonet"]}>
                  <IconMessage /> {item.comment}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ArticleList;