import React, { FC, useEffect } from "react";
import style from "./index.module.css";
import Image from "next/image";
import { IconStar, IconThumbUp, IconEye } from "@arco-design/web-react/icon";
const HomeRight: FC = () => {
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
            <IconThumbUp />
            <span> 获得点赞 </span>
            <span>7</span>
          </p>
          <p>
            <IconStar />
            <span> 文章被收藏 </span>
            <span>3</span>
          </p>
          <p>
            <IconEye />
            <span> 总浏览 </span>
            <span>10</span>
          </p>
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
          <div className={style["event-subtitle"]}>01st Jan, 2019 07:00AM</div>
        </div>
      </div>
    </div>
  );
};
export default HomeRight;
