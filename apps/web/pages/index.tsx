import Router from "next/router";
import Image from "next/image";
import style from "./index.module.css";
import { topNavBar } from "../utils";
import { useEffect, useState } from "react";
import React, { FC } from "react";
import { articleList } from "api-sdk";
import { WebProps } from "../type";
import { prependOnceListener } from "process";
const Web: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickHandler = (index: number) => {
    setActiveIndex(index);
  };
  const [listData, setListData] = useState<WebProps[]>();
  function goTodetail(id: number) {
    Router.push({
      pathname: "/detail",
      query: { id: id },
    });
  }
  function handlePublish() {
    Router.push("/publish");
  }
  useEffect(() => {
    let getData = async () => {
      const result = await articleList();
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
          <div className={style["search_ipt"]}>
            <input
              type="text"
              className={style["search_ipt_input"]}
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
        <div className={style["main"]}>
          <div className={style["main_top"]}>
            <div className={style["top_bg"]}></div>
            <div className={style["top_nav"]}>
              <ul>
                {topNavBar.map((item, index) => {
                  return (
                    <li
                      key={item}
                      className={
                        index == activeIndex ? `${style["elementActive"]}` : ""
                      }
                      onClick={() => clickHandler(index)}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style["list"]}>
            <ul>
              {listData &&
                listData[activeIndex].map((item) => {
                  return (
                    <li onClick={() => goTodetail(item.id)} key={item.id}>
                      <div className={style["title"]}>{item.title}</div>
                      <div className={style["describe"]}>
                        {item.user} | {item.time}
                      </div>
                      <div className={style["detail"]}>{item.introduce}</div>
                      <div className={style["article_info"]}>
                        <div className={style["dianzan"]}>
                          点赞 {item.getLikes}
                        </div>
                        <div className={style["commonet"]}>
                          评论 {item.comment}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className={style["right"]}>
          <div className={style["personal_info"]}>
            <div className={style["self_info"]}>
              <div className={style["avatar"]}></div>
              <div className={style["info_det"]}>
                <p>小太阳林凌柒</p>
                <div className={style["info_desc"]}>
                  好好奋斗尽快发货的可变长度和恢复重建的和等方式尽快和东方时空飓风的是
                </div>
              </div>
            </div>
            <div className={style["achieve"]}>
              <p>获得点赞 7</p>
              <p>文章被收藏 3</p>
              <p>总浏览 10</p>
            </div>
            <div className={style["entrance"]}>进入主页</div>
          </div>

          <div className={`${style["event"]} ${style["box"]}`}>
            <div className={style["event-wrapper"]}>
              <Image
                src="/images/rili_bg.png"
                className={style["event-img"]}
                alt=""
                width={270}
                height={180}
              />
              <div className={style["event-date"]}>
                <div className={style["event-month"]}>Jan</div>
                <div className={style["event-day"]}>01</div>
              </div>
              <div className={style["event-title"]}>Winter Wonderland</div>
              <div className={style["event-subtitle"]}>
                01st Jan, 2019 07:00AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Web;
