import React, { FC, useRef } from "react";
import { Layout, Tag, Message } from "@arco-design/web-react";
import { Grid } from "@arco-design/web-react";
import Editor from "@monaco-editor/react";
import { EnergtSphereLoading } from "magic-design-react";

import { classify } from "../../utils";
import style from "./index.module.css";
import "highlight.js/styles/night-owl.css";
import { PublishCode } from "api-sdk";

const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

const Publish: FC = () => {
  let code = useRef("");
  let tagArr = useRef<string[]>([]);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const briefRef = useRef<HTMLTextAreaElement | null>(null);
  //高亮代码
  //选中标签
  function handleClickTags(checked: boolean, tagIndex: number) {
    if (checked && !tagArr.current.includes(classify[tagIndex])) {
      tagArr.current.push(classify[tagIndex]);
    } else if (!checked) {
      //没有选中 遍历数组看数组里面是否有这个元素，如果有就删除
      const newTagArr = tagArr.current.filter(
        (item) => item !== classify[tagIndex]
      );
      tagArr.current = newTagArr;
    }
  }
  //发布
  async function handlePublish() {
    const title = titleRef.current?.value;
    const brief_intro = briefRef.current?.value;
    if (title && code && tagArr && brief_intro) {
      const article = {
        title,
        content: code.current,
        brief_intro,
        tags: tagArr.current,
      };
      //发送请求，发布代码
      const publishRes = await PublishCode(article);
      if (publishRes.data.info == "success") {
        Message.success(`发布成功!`);
      }
    } else {
      Message.warning("请将信息填写完整!");
    }
  }
  //当前的代码
  function saveCurCode(value: string | undefined) {
    if (value) {
      code.current = value;
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
      <div
        style={{ width: "100vw", overflow: "hidden" }}
        className={style["content_wrapper"]}
      >
        <div className={style["publish_left"]}>
          <Editor
            theme="vs-dark"
            defaultLanguage="javascript"
            loading={
              <div className={style["loading__bg"]}>
                <EnergtSphereLoading speed="2.4s" />
              </div>
            }
            className={style["editor"]}
            onChange={(value: string | undefined) => saveCurCode(value)}
          />
        </div>
        <div
          className={style["publish_right"]}
          style={{ width: "25%", overflow: "hidden" }}
        >
          <div className={style["intro"]}>
            <p>简介</p>
            <textarea
              className={style["introduction_ipt"]}
              ref={briefRef}
            ></textarea>
          </div>
          <div className={style["classify"]}>
            <p>分类</p>

            <Row className={style["grid-gutter-demo"]} gutter={[24, 12]}>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Publish;
