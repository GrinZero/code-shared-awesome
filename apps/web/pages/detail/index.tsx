import style from './index.module.css';

import {Comment, Avatar} from '@arco-design/web-react';
import {
  IconHeartFill,
  IconMessage,
  IconStarFill,
  IconHeart,
  IconStar,
} from '@arco-design/web-react/icon';

import hljs from 'highlight.js';
import 'highlight.js/styles/night-owl.css';
import {useEffect} from 'react';
import React, {FC} from 'react';
import {comment} from '../../utils';
const Detail: FC = () => {
  useEffect(() => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll('pre code');
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el as HTMLElement);
    });
  }, []);
  const content = `
  <pre>
  <code>console.log(abc)
console.log(abc)
console.log(abc);xxx.forEach(item=>{console.log(1)})</code>
  </pre>
  
  `;
  const [like, setLike] = React.useState(true);
  const [star, setStar] = React.useState(true);
  const actions = [
    <span
      className="custom-comment-action"
      key="heart"
      onClick={() => setLike(!like)}>
      {like ? <IconHeartFill style={{color: '#f53f3f'}} /> : <IconHeart />}
      {83 + (like ? 1 : 0)}
    </span>,
    <span
      className="custom-comment-action"
      key="star"
      onClick={() => setStar(!star)}>
      {star ? <IconStarFill style={{color: '#ffb400'}} /> : <IconStar />}
      {3 + (star ? 1 : 0)}
    </span>,
    <span className="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </span>,
  ];
  return (
    <div className={style['content']}>
      <div className={style['head']}>
        <div className={style['head_l']}>Code Show</div>
        <div className={style['head_r']}>
          <div className={style['avatar']}></div>
        </div>
      </div>
      <div className={style['container']}>
        <div className={style['comment']}>
          <div className={style['com_det']}>
            {comment.map((item) => (
              <Comment
                className={style['comment_item']}
                actions={actions}
                align="right"
                author={item.author}
                avatar={<Avatar></Avatar>}
                content={<div>{item.det}</div>}
                datetime={item.time}
              />
            ))}
          </div>
          <div className={style['publish_com']}>
            <textarea rows={3} className={style['com_neirong']}></textarea>
            <button className={style['com_btn']}>发送</button>
          </div>
        </div>
        <div className={style['code']}>
          <h2 className={style['title']}>过渡设计是罪恶的</h2>
          <div className={style['author_info']}>
            <div className={style['author_det']}>
              <div className={style['author_avatar']}></div>

              <div className={style['detail']}>
                <p className={style['author_name']}>小太阳</p>
                <p className={style['article_det']}>
                  <p>2022年9月30日</p>
                  <p className={style['read']}>阅读量 283384</p>
                </p>
              </div>
            </div>
            <button className={style['focus']}>+ 关注</button>
          </div>

          <div className={style['dg-html']}>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </div>
          <div className={style['operation']}>
            <p>
              <IconHeartFill className={style['like']} />
            </p>
            <p>
              <IconStarFill className={style['collect']} />
            </p>
            <p>
              <span className={style['fork']}>fork</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
