import { Spin } from "@arco-design/web-react";
import { IconClose, IconSearch } from "@arco-design/web-react/icon";
import React, { useEffect, useState } from "react";
import { clearLoginStatus, getLoginStatus } from "../../utils/auth_token";
import style from "./index.module.scss";

type ContentLayoutType = "default" | "middle";

interface MainLayoutProps {
  children?: React.ReactNode;
  contentType?: ContentLayoutType;
  loading?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children = null,
  contentType = "default",
  loading = false,
}) => {
  const [status, setStatus] = useState<boolean>(false);
  const handleClick = (path: string) => {
    // Router.push(path);
    const w = window.open("about:blank");
    if (w) {
      w.location.href = `${path}`;
    }
  };
  const handleLogout = () => {
    setStatus(false);
    clearLoginStatus();
  };

  useEffect(() => {
    setStatus(getLoginStatus());
  }, []);

  return (
    <div className={style.mainLayout}>
      <header className={style.header}>
        <div className={style.head_l}>Code Show</div>
        <div className={style.head_r}>
          <div className={style.search}>
            <input
              type="text"
              className={style.search_input}
              placeholder="搜索文章"
            />
            <IconSearch className={style.icon_search} />
          </div>
          {status ? (
            <>
              <button
                className={style.publish}
                onClick={() => handleClick("/publish")}
              >
                发表文章
              </button>
              <button
                className={style.publish}
                onClick={() => handleClick("/personal")}
              >
                进入主页
              </button>
              <span
                onClick={handleLogout}
                className={style.logout}
                title={"注销"}
              >
                <IconClose />
              </span>
            </>
          ) : (
            <>
              <button
                className={style.login}
                onClick={() => handleClick("/login")}
              >
                登录
              </button>
            </>
          )}
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
