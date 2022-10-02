import React, { FC } from "react";
import { Comment, Avatar } from "@arco-design/web-react";
import {
  IconHeartFill,
  IconMessage,
  IconStarFill,
  IconHeart,
  IconStar,
} from "@arco-design/web-react/icon";
import { comment } from "../../utils";
import style from "./index.module.css";
const MyComment: FC = () => {
  console.log(1);

  const [like, setLike] = React.useState(true);
  const [star, setStar] = React.useState(true);
  const actions = [
    <span
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like)}
    >
      {like ? <IconHeartFill style={{ color: "#f53f3f" }} /> : <IconHeart />}
      {83 + (like ? 1 : 0)}
    </span>,
    <span
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star)}
    >
      {star ? <IconStarFill style={{ color: "#ffb400" }} /> : <IconStar />}
      {3 + (star ? 1 : 0)}
    </span>,
    <span className="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </span>,
  ];
  return (
    <div className={style["comment"]}>
      <div className={style["com_det"]}>
        {comment.map((item) => (
          <Comment
            className={style["comment_item"]}
            actions={actions}
            align="right"
            author={item.author}
            avatar={<Avatar></Avatar>}
            content={<div>{item.det}</div>}
            datetime={item.time}
          />
        ))}
      </div>
      <div className={style["publish_com"]}>
        <textarea rows={3} className={style["com_neirong"]}></textarea>
        <button className={style["com_btn"]}>发送</button>
      </div>
    </div>
  );
};
export default MyComment;
