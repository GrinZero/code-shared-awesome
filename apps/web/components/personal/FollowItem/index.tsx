import { Avatar } from "@arco-design/web-react";
import React from "react";
import style from "./index.module.scss";
import { FollowItemProps } from "../../../types";

const FollowItem: React.FC<FollowItemProps> = ({
  data: { id = 0, name = "", comment = "" },
}) => {
  // const { id, name, comment } = props.data;

  const handleFollow = () => {
    console.log(id);
  };

  return (
    <div className={style.follow}>
      <Avatar className={style.avatar}>
        <img
          alt="avatar"
          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        />
      </Avatar>

      <div className={style.content}>
        <div className={style.info}>
          <p>{name}</p>
          <p className={style.comment}>{comment}</p>
        </div>
        <div className={style.active} onClick={handleFollow}>
          已关注
        </div>
      </div>
    </div>
  );
};

export default FollowItem;
