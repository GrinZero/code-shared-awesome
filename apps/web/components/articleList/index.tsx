import React, { FC, useEffect } from "react";
import { ArticleListProps } from "../../types";
import style from "./index.module.scss";
import Router from "next/router";
import { IconThumbUp, IconMessage } from "@arco-design/web-react/icon";

const ArticleList: FC<ArticleListProps> = (props) => {
  const { listData, activeIndex } = props;
  const listDetailData = listData.filter((item) => {
    return item.type == activeIndex;
  });
  useEffect(() => {});
  function goTodetail(id: number) {
    const w = window.open("about:blank");
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    // if(process.env.NODE_ENV  === "development" ){
    //   return
    // }
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    const baseurl =
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      process.env.NODE_ENV === "development" ? "" : "/code-shared-awesome";
    console.log(baseurl);

    if (w) {
      w.location.href = `${baseurl}/detail?id=${id}&type=${activeIndex}`;
    }
  }
  return (
    <div className={style["list"]}>
      <ul>
        {listDetailData.map((item) => {
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
