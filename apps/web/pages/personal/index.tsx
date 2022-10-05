import React, { useMemo, useState } from "react";
import style from "./index.module.scss";
import { Menu } from "@arco-design/web-react";
import MainLayout from "../../layouts/main-layout";
import Achievement from "./Achievement";
import AvatarHead from "./AvatarHead";

const MenuItem = Menu.Item;

const menus = [
  { title: "动态", key: "1" },
  { title: "发布", key: "2" },
  { title: "关注", key: "3" },
  { title: "专栏", key: "4" },
];

const Personal: React.FC = () => {
  const [selectMenu, setSelectMenu] = useState<string>(menus[0].key);

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

  return (
    <MainLayout contentType="middle">
      <div className={style.personal}>
        <div className={style.left} style={{ height: 1000 }}>
          <AvatarHead userId="123" />

          <div className={style.menuDemo}>{menuElements}</div>

          <div className={style.content}></div>
        </div>
        <div className={style.right}>
          <Achievement />
        </div>
      </div>
    </MainLayout>
  );
};

export default Personal;
