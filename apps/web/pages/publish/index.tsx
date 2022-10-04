import React, { FC, useState, useEffect } from "react";
import { Layout } from "@arco-design/web-react";
import style from "./index.module.css";

import "highlight.js/styles/night-owl.css";
const Sider = Layout.Sider;
const Header = Layout.Header;

const Content = Layout.Content;
const Publish: FC = () => {
  const [text, setText] = useState("");
  function onChangeHandle(value: any) {
    setText(value);
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ height: "1.2rem" }}>
        <input
          placeholder="Enter the title"
          className={style["title_ipt"]}
        ></input>
      </Header>
      <Layout>
        <Content
          style={{ width: "75%" }}
          className={style["publish_left"]}
        ></Content>
        <Sider style={{ width: "25%" }} className={style["publish_right"]}>
          <div></div>
        </Sider>
      </Layout>
    </Layout>
  );
};
export default Publish;
// import React, { useState, FC, ReactElement } from "react";
// import MonacoEditor from "react-monaco-editor";
// interface Props {}
// const MyEdit: FC<Props> = (): ReactElement => {
//   const [text, setText] = useState("");
//   function onChangeHandle(value: any) {
//      setText(value);
//   }
//   return (
//       <div>
//         <MonacoEditor
//           width="100%"
//           height={window.innerHeight - 16}
//           language="typescript"
//           theme="vs-dark"
//           value={text}
//           onChange={onChangeHandle}
//           options={{
//             selectOnLineNumbers: true,
//             matchBrackets: "near",
//           }}
//         />
//       </div>
//   );
// }
// export default MyEdit;
// 只是以代码格式展示出来，下面例子展示sql

// import React from "react";

// // 引入codemirror封装
// import { UnControlled as CodeMirror } from "react-codemirror2";

// import "codemirror/lib/codemirror.css";
// // 主题风格 可以自己定义
// import "codemirror/theme/blackboard.css";
// // 代码模式，可以自己定义
// import "codemirror/mode/sql/sql";

// interface PropsType {
//   value: string;
//   mode: string;
// }

// const ShowCodeMirror = (props: PropsType) => {
//   const { value, mode } = props;
//   return (
//     <CodeMirror
//       value={value}
//       options={{
//         mode,
//         theme: "blackboard",
//         lineNumbers: true, // 是否显示行号
//         readOnly: true, // 是否只读
//         lineWiseCopyCut: true,
//         // lineWrapping: true,
//       }}
//       // 设置尺寸
//       editorDidMount={(editor) => {
//         editor.setSize("auto", "auto");
//       }}
//       onChange={(editor: any, data: any, value: string) => {}}
//       onBeforeChange={(editor: any, data: any, value: string) => {}}
//     />
//   );
// };

// export default React.memo(ShowCodeMirror);
