import React, { FC, useEffect, useState } from "react";
import { topNavBar } from "../../../utils";
import Router from "next/router";
import { HomeLeftProps } from "../../../types";
import style from "./index.module.css";
import { Carousel } from "@arco-design/web-react";
import { IconThumbUp, IconMessage } from "@arco-design/web-react/icon";
const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];
const HomeLeft: FC<HomeLeftProps> = (props) => {
  const { listData } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const clickHandler = (index: number) => {
    setActiveIndex(index);
  };
  function goTodetail(id: number) {
    Router.push({
      pathname: "/detail",
      query: { id: id, type: activeIndex },
    });
  }
  useEffect(() => {
    document.addEventListener("selectstart", function (e) {
      e.preventDefault();
    });
  }, []);
  return (
    <div className={style["main"]}>
      <div className={style["main_top"]}>
        <Carousel
          className={style["top_bg"]}
          autoPlay={true}
          indicatorType="dot"
          showArrow="hover"
        >
          {imageSrc.map((src, index) => (
            <div key={index} className={style["swiper_item"]}>
              <img src={src} style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </Carousel>

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
    </div>
  );
};
export default HomeLeft;
