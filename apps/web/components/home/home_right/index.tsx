import React, { FC } from "react";
import style from "./index.module.css";
import { IconStar, IconThumbUp, IconEye } from "@arco-design/web-react/icon";
import { getTime } from "../../../utils";
import Router from "next/router";

const HomeRight: FC = () => {
  const handleClick = (path: string) => {
    Router.push(path);
  };

  return (
    <div className={style["right"]}>
      <div className={style["personal_info"]}>
        <div className={style["self_info"]}>
          <div className={style["avatar"]}></div>
          <div className={style["info_det"]}>
            <p>小太阳林凌柒</p>
            <div className={style["info_desc"]}>
              好好奋斗尽快发货的可变长度和恢复重建的和等方式尽快和东方时空飓风的是j决定是否可接受的回复快点睡觉
            </div>
          </div>
        </div>
        <div className={style["achieve"]}>
          <p>
            <IconThumbUp className={style["icon"]} />
            <span> 获得点赞 </span>
            <span>7</span>
          </p>
          <p>
            <IconStar className={style["icon"]} />
            <span> 文章被收藏 </span>
            <span>3</span>
          </p>
          <p>
            <IconEye className={style["icon"]} />
            <span> 总浏览 </span>
            <span>10</span>
          </p>
        </div>
        <div
          className={style["entrance"]}
          onClick={() => handleClick("/personal")}
        >
          进入主页
        </div>
      </div>

      <div className={`${style["event"]} ${style["box"]}`}>
        <div className={style["event-wrapper"]}>
          <img
            src="/images/rili_bg.png"
            className={style["event-img"]}
            alt=""
            width={270}
            height={180}
          />
          <div className={style["event-date"]}>
            <div className={style["event-month"]}>{getTime().month}</div>
            <div className={style["event-day"]}>{`0${getTime().day}`}</div>
          </div>
          <div className={style["event-title"]}>Winter Wonderland</div>
          <div className={style["event-subtitle"]}>{getTime().detTime}</div>
        </div>
      </div>
    </div>
  );
};
export default HomeRight;
