import React, { FC, useRef, useState } from "react";
import { Comment, Avatar } from "@arco-design/web-react";
import {
  IconHeartFill,
  IconMessage,
  IconStarFill,
  IconHeart,
  IconStar,
} from "@arco-design/web-react/icon";
import { AddComment } from "api-sdk";
import style from "./index.module.css";
import dayjs from "dayjs";
import { CommentProps } from "../../../types";
const MyComment: FC<CommentProps> = (props) => {
  const { comment, author, id } = props;
  console.log("canhsu", props);

  const [like, setLike] = React.useState(false);
  const [star, setStar] = React.useState(false);
  const myCommentData = useRef<HTMLTextAreaElement | null>(null);
  const commentRef = useRef<HTMLDivElement | null>(null);
  const [commentList, setCommentList] = useState(comment);
  const addComment = async () => {
    const value = myCommentData.current?.value;
    // 时间
    const time = dayjs().format("MM月D日 HH:mm");
    //获取到整个评论区
    // const comment = commentRef.current!;
    // console.log("评论", comment);
    // comment.scrollIntoView({ behavior: "auto" });
    //  console.log("111111");

    // comment.scrollIntoView({ behavior: "smooth" });

    if (value && id) {
      const resId = id.toString();
      const commentParams = {
        id: resId,
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
                className={style["custom-comment-action"]}
                key="heart"
                onClick={() => setLike(!like)}
              >
                <span className={style["heart_icon"]}>
                  {like ? (
                    <IconHeartFill style={{ color: "#f53f3f" }} />
                  ) : (
                    <IconHeart />
                  )}
                </span>
                <span className={style["heart_num"]}>
                  {" "}
                  {item.getLike + (like ? 1 : 0)}
                </span>
              </span>,
              <span
                className={style["custom-comment-action"]}
                key="star"
                onClick={() => setStar(!star)}
              >
                <span className={style["star_icon"]}>
                  {star ? (
                    <IconStarFill style={{ color: "#ffb400" }} />
                  ) : (
                    <IconStar />
                  )}
                </span>
                <span className={style["star_num"]}>
                  {item.getcollect + (star ? 1 : 0)}
                </span>
              </span>,
              // <span className={style["custom-comment-action"]} key="reply">
              //   <IconMessage /> Reply
              // </span>,
            ]}
            align="right"
            author={item.author}
            avatar={<Avatar className={style["avatar"]}></Avatar>}
            content={<div>{item.det}</div>}
            datetime={item.time}
            key={index}
          />
        ))}
        <div style={{ float: "left", clear: "both" }} ref={commentRef}></div>
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
