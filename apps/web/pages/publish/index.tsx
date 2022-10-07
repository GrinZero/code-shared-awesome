import React, { FC, useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  Layout,
  Tag,
  Button,
  Popconfirm,
  Message,
  Alert,
} from "@arco-design/web-react";
import { Grid, Divider } from "@arco-design/web-react";
import Editor from "@monaco-editor/react";
import hljs from "highlight.js";

import { classify } from "../../utils";

import style from "./index.module.css";
import "highlight.js/styles/night-owl.css";

const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Header = Layout.Header;

const Content = Layout.Content;
const Publish: FC = () => {
  let tagArr: string[] = [];
  let code: string = "";
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const briefRef = useRef<HTMLTextAreaElement | null>(null);
  //高亮代码
  //选中标签
  function handleClickTags(checked: boolean, tagIndex: number) {
    if (checked && !tagArr.includes(classify[tagIndex])) {
      tagArr.push(classify[tagIndex]);
    } else if (!checked) {
      //没有选中 遍历数组看数组里面是否有这个元素，如果有就删除
      const newTagArr = tagArr.filter((item) => item !== classify[tagIndex]);
      tagArr = newTagArr;
    }
  }
  //发布
  function handlePublish() {
    // const ipt_value = textRef.current?.value;
    const title = titleRef.current?.value;
    const brief_intro = briefRef.current?.value;
    if (title && code && tagArr && brief_intro) {
      const article = {
        title,
        content: code,
        brief_intro,
        tags: tagArr,
      };
      //发送请求，发布代码
    } else {
      Message.warning("请将信息填写完整!");
    }
  }
  //当前的代码
  function saveCurCode(value: string | undefined) {
    console.log(value);
    if (value) {
      code = value;
    }
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ height: "1.2rem" }}>
        <input
          placeholder="Enter the title"
          className={style["title_ipt"]}
          ref={titleRef}
        ></input>
      </Header>
      <Layout>
        <Content className={style["publish_left"]}>
          <Editor
            theme="vs-dark"
            height="90.5vh"
            width="100vw"
            defaultLanguage="javascript"
            defaultValue="const a=1;"
            className={style["editor"]}
            onChange={(value: string | undefined) => saveCurCode(value)}
          />
        </Content>
        <Sider
          className={style["publish_right"]}
          style={{ width: "25%", overflow: "hidden" }}
        >
          <div>
            <p>简介</p>
            <textarea
              className={style["introduction_ipt"]}
              ref={briefRef}
            ></textarea>
          </div>
          <div className={style["classify"]}>
            <p>分类</p>

            <Row className="grid-gutter-demo" gutter={[24, 12]}>
              {classify.map((item, index) => {
                return (
                  <Col sm={12} md={12} lg={8} xl={8} key={index}>
                    <Tag
                      className={style["tag"]}
                      checkable
                      color="blue"
                      onCheck={(checked: boolean) =>
                        handleClickTags(checked, index)
                      }
                      key={index}
                    >
                      {item}
                    </Tag>
                  </Col>
                );
              })}
            </Row>
          </div>

          <div className={style["btn"]}>
            <button className={style["certain"]} onClick={handlePublish}>
              确定并发布
            </button>
            {/* <button className={style["cancle"]}>取消</button> */}
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
};
export default Publish;
