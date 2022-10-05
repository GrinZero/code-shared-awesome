import { IconEye, IconStar, IconThumbUp } from "@arco-design/web-react/icon";
import classNames from "classnames";
import React from "react";
import style from "./index.module.scss";

interface AchievementProps {
  collection?: number;
  good?: number;
  read?: number;
  className?: string;
}

/**
 * 个人成就
 */
const Achievement: React.FC<AchievementProps> = (props) => {
  const { collection = 0, good = 0, read = 0, className = "" } = props;

  return (
    <div className={classNames(style.achieve, className)}>
      <div className={style.title}>个人成就</div>
      <ul className={style.achieveUl}>
        <li>
          <IconThumbUp />
          <span> 获得点赞 </span>
          <span>{good}</span>
        </li>
        <li>
          <IconStar />
          <span> 文章被收藏 </span>
          <span>{collection}</span>
        </li>
        <li>
          <IconEye />
          <span> 总浏览 </span>
          <span>{read}</span>
        </li>
      </ul>
    </div>
  );
};

export default Achievement;
