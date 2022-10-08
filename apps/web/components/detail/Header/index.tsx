import React, { FC } from "react";
import style from "./index.module.css";
import Router from "next/router";
const MyHeader: FC = () => {
  function goToHome() {
    Router.push("/home");
  }
  function goToPersonal() {
    Router.push("/personal");
  }
  return (
    <div className={style["head"]}>
      <div className={style["head_l"]} onClick={goToHome}>
        Code Show
      </div>
      <div className={style["head_r"]}>
        <div className={style["avatar"]} onClick={goToPersonal}></div>
      </div>
    </div>
  );
};
export default MyHeader;
