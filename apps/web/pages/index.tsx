import Router from "next/router";
import style from "./index.module.css";
import React, { FC, useEffect, useState } from "react";
import { getArticleList } from "api-sdk";
import { ListDataProps } from "../type";
import HomeLeft from "../components/home_left";
import HomeRight from "../components/home_right";
import { IconSearch } from "@arco-design/web-react/icon";
const Web: FC = () => {
  const [listData, setListData] = useState<ListDataProps[]>();

  function handlePublish() {
    Router.push("/publish");
  }
  useEffect(() => {
    let getData = async () => {
      const result = await getArticleList();
      const listData = result.data;
      setListData(listData);
    };
    getData();
  }, []);

  return (
    <div className={style["container"]}>
      <div className={style["head"]}>
        <div className={style["head_l"]}>Code Show</div>
        <div className={style["head_r"]}>
          <div className={style["search"]}>
            <input
              type="text"
              className={style["search_input"]}
              placeholder="搜索文章"
            />
            <IconSearch className={style["icon_search"]} />
          </div>
          <button className={style["publish"]} onClick={handlePublish}>
            发表文章
          </button>
          <button
            className={style["login"]}
            onClick={() => {
              Router.push("/login");
            }}
          >
            登录
          </button>
        </div>
      </div>

      <div className={style["content"]}>
        {listData && <HomeLeft listData={listData}></HomeLeft>}
        <HomeRight></HomeRight>
      </div>
    </div>
  );
};
export default Web;
