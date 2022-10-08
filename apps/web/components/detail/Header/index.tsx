import React, { FC, useEffect } from "react";
import style from "./index.module.css";
const MyHeader: FC = () => {
  return (
    <div className={style["head"]}>
      <div className={style["head_l"]}>Code Show</div>
      <div className={style["head_r"]}>
        <div className={style["avatar"]}></div>
      </div>
    </div>
  );
};
export default MyHeader;
