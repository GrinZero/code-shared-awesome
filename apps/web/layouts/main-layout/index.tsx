import { Spin } from "@arco-design/web-react";
import { IconSearch } from "@arco-design/web-react/icon";
import Router from "next/router";
import React from "react";
import style from "./index.module.scss";

type ContentLayoutType = "default" | "middle";

interface MainLayoutProps {
  children?: React.ReactNode;
  contentType?: ContentLayoutType;
  loading?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentType = "default",
  loading = false,
}) => {
  const handleClick = (path: string) => {
    Router.push(path);
  };

  return (
    <div className={style.mainLayout}>
      <header className={style.header}>
        <div className={style.head_l} onClick={() => handleClick("/home")}>
          Code Show
        </div>
        <div className={style.head_r}>
          <div className={style.search}>
            <input
              type="text"
              className={style.search_input}
              placeholder="搜索文章"
            />
            <IconSearch className={style.icon_search} />
          </div>
          <button
            className={style.publish}
            onClick={() => handleClick("/publish")}
          >
            发表文章
          </button>
          <button className={style.login} onClick={() => handleClick("/login")}>
            登录
          </button>
        </div>
      </header>

      <section className={style.section}>
        <Spin loading={loading} dot style={{ width: "100%" }}>
          {contentType === "default" ? (
            <>{children}</>
          ) : (
            <div className={style.content}>{children}</div>
          )}
        </Spin>
      </section>
    </div>
  );
};

export default MainLayout;
