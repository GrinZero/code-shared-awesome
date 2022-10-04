import Router from "next/router";
import Image from "next/image";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import React, { FC } from "react";
import { getArticleList } from "api-sdk";
import { ListDataProps } from "../type";
import HomeLeft from "../components/home_left";
import HomeRight from "../components/home_right";

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
              placeholder="搜索音乐、MV、歌单"
            />
            <a className="search_ipt_btn iconfont icon-sousuo"></a>
          </div>
          <button className={style["publish"]} onClick={handlePublish}>
            发表文章
          </button>
          <button className={style["login"]}>登录</button>
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
