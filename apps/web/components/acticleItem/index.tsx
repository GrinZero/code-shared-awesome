import { IconMessage, IconThumbUp } from "@arco-design/web-react/icon";
import Router from "next/router";
import React from "react";
import style from "./index.module.scss";

interface ItemData {
  id: number;
  type: number;
  title: string;
  time: string;
  user: string;
  introduce: string;
  getLikes: number;
  comment: number;
  code: string;
}

interface ActicleItemProps {
  data: ItemData;
  /**
   * @params id 文章id
   * @params type 文章type
   */
  onClick?: (id: number, type: number) => void;
}

const ActicleItem: React.FC<ActicleItemProps> = ({ data, onClick }) => {
  const { id, type, title, time, user, introduce, getLikes, comment, code } =
    data;

  const handleClick = () => {
    onClick && onClick(id, type);
  };

  return (
    <div className={style.item}>
      <div onClick={handleClick}>
        <div className={style.title}>{title}</div>
        <div className={style.describe}>
          {user} | {time}
        </div>
        <div className={style.detail}>{introduce}</div>
      </div>
      <div className={style.article_info}>
        <div>
          <IconThumbUp /> {getLikes}
        </div>
        <div>
          <IconMessage /> {comment}
        </div>
      </div>
    </div>
  );
};

export default ActicleItem;
