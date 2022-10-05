import React, { useEffect, useMemo, useState } from "react";
import style from "./index.module.scss";
import { Menu } from "@arco-design/web-react";
import MainLayout from "../../layouts/main-layout";
import Achievement from "./Achievement";
import AvatarHead from "./AvatarHead";
import { getUserInfo } from "api-sdk";

const MenuItem = Menu.Item;

const menus = [
  { title: "动态", key: "1" },
  { title: "发布", key: "2" },
  { title: "关注", key: "3" },
  { title: "专栏", key: "4" },
];

export interface UserInfo {
  id: number;
  name: string;
  account: string;
  github?: string;
  qq?: string;
  weibo?: string;
  collection?: number;
  good?: number;
  upload?: number;
  read?: number;
}

const Personal: React.FC = () => {
  const [selectMenu, setSelectMenu] = useState<string>(menus[0].key);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: -1,
    name: "",
    account: "",
  });

  const menuElements = useMemo(() => {
    const menuStyle = { backgroundColor: "var(--theme-bg-color)" };
    return (
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[selectMenu]}
        className={style.menu}
      >
        {menus.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => setSelectMenu(item.key)}
            style={menuStyle}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    );
  }, [selectMenu]);

  useEffect(() => {
    getUserInfo().then((res) => {
      res.status === "ok" && setUserInfo(res.data);
    });
  }, []);

  return (
    <MainLayout contentType="middle">
      <div className={style.personal}>
        <div className={style.left} style={{ height: 1000 }}>
          <AvatarHead userInfo={userInfo} isOwn={true} />

          <div className={style.menuDemo}>{menuElements}</div>

          <div className={style.content}></div>
        </div>
        <div className={style.right}>
          <Achievement userInfo={userInfo} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Personal;
