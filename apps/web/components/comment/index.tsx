import React, { FC, useRef, useState } from "react";
import { Comment, Avatar, CommentProps } from "@arco-design/web-react";
import {
  IconHeartFill,
  IconMessage,
  IconStarFill,
  IconHeart,
  IconStar,
} from "@arco-design/web-react/icon";
import { comment } from "../../utils";
import { AddComment } from "api-sdk";
import style from "./index.module.css";
import Item from "@arco-design/web-react/es/Breadcrumb/item";
import dayjs from "dayjs";
const MyComment: FC<any> = (props) => {
  const { comment, author, id } = props;

  const [like, setLike] = React.useState(false);
  const [star, setStar] = React.useState(false);
  const myCommentData = useRef<HTMLTextAreaElement | null>(null);
  const [commentList, setCommentList] = useState(comment);
  const addComment = async () => {
    const value = myCommentData.current?.value;
    // 时间
    const time = dayjs().format("MM月D日 HH:mm");
    if (value) {
      const commentParams = {
        id,
        author,
        det: value,
        time,
        getLike: 0,
        getcollect: 0,
      };
      const successAddComment = await AddComment(commentParams);
      const newCommentList = [...successAddComment.data];
      setCommentList(newCommentList);
    }
  };

  return (
    <div className={style["comment"]}>
      <div className={style["com_det"]}>
        {commentList.map((item: any, index: number) => (
          <Comment
            className={style["comment_item"]}
            actions={[
              <span
                className="custom-comment-action"
                key="heart"
                onClick={() => setLike(!like)}
              >
                {like ? (
                  <IconHeartFill style={{ color: "#f53f3f" }} />
                ) : (
                  <IconHeart />
                )}
                {item.getLike + (like ? 1 : 0)}
              </span>,
              <span
                className="custom-comment-action"
                key="star"
                onClick={() => setStar(!star)}
              >
                {star ? (
                  <IconStarFill style={{ color: "#ffb400" }} />
                ) : (
                  <IconStar />
                )}
                {item.getcollect + (star ? 1 : 0)}
              </span>,
              <span className="custom-comment-action" key="reply">
                <IconMessage /> Reply
              </span>,
            ]}
            align="right"
            author={item.author}
            avatar={<Avatar></Avatar>}
            content={<div>{item.det}</div>}
            datetime={item.time}
            key={index}
          />
        ))}
      </div>
      <div className={style["publish_com"]}>
        <textarea
          rows={3}
          className={style["com_neirong"]}
          ref={myCommentData}
        ></textarea>
        <button className={style["com_btn"]} onClick={addComment}>
          发送
        </button>
      </div>
    </div>
  );
};
export default MyComment;
