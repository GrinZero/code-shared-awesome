import React, { FC, useState, useEffect, useRef } from "react";
import { Layout, Tag, Button } from "@arco-design/web-react";
import style from "./index.module.css";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import { Grid, Divider } from "@arco-design/web-react";
import { classify } from "../../utils";
const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Header = Layout.Header;

const Content = Layout.Content;
const Publish: FC = () => {
  const [text, setText] = useState("");
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  function handleInput() {
    const ipt_value = textRef.current?.value;

    if (ipt_value || ipt_value == "") {
      setText(ipt_value);
    }
  }
  useEffect(() => {
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true,
    });
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll("pre code");
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el as HTMLElement);
    });
  });

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ height: "1.2rem" }}>
        <input
          placeholder="Enter the title"
          className={style["title_ipt"]}
        ></input>
      </Header>
      <Layout>
        <Content style={{ width: "75%" }} className={style["publish_left"]}>
          <div className={style["dg-html"]}>
            <div
              dangerouslySetInnerHTML={{
                __html: `<pre> <code>${text}</code> </pre>`,
              }}
            />
          </div>
          <textarea
            className={style["code_ipt"]}
            ref={textRef}
            onChange={handleInput}
          ></textarea>
        </Content>
        <Sider style={{ width: "25%" }} className={style["publish_right"]}>
          <div>
            <p>简介</p>
            <textarea className={style["introduction_ipt"]}></textarea>
          </div>
          <div className={style["classify"]}>
            <p>分类</p>

            <Row className="grid-gutter-demo" gutter={[24, 12]}>
              {classify.map((item) => {
                return (
                  <Col span={8}>
                    <Tag className={style["tag"]}>{item}</Tag>
                  </Col>
                );
              })}
            </Row>
          </div>

          <div className={style["btn"]}>
            <button className={style["certain"]}>确定并发布</button>
            <button className={style["cancle"]}>取消</button>
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
};
export default Publish;
