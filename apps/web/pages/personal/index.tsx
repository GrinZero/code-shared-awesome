import React, { useEffect, useMemo, useState } from "react";
import style from "./index.module.scss";
import { Menu } from "@arco-design/web-react";
import MainLayout from "../../layouts/main-layout";
import Achievement from "./Achievement";
import AvatarHead from "./AvatarHead";
import { getArticleList, getUserInfo } from "api-sdk";
import { ListDataProps } from "../../types";
import ActicleItem from "../../components/acticleItem";
import FollowItem from "./FollowItem";

const MenuItem = Menu.Item;

const menus = [
  { title: "动态", key: "0" },
  { title: "发布", key: "1" },
  { title: "关注", key: "2" },
  { title: "收藏", key: "3" },
  { title: "评论", key: "4" },
];
const follows = [
  { id: 0, name: "张三", comment: "红红火火恍恍惚惚或或或" },
  { id: 1, name: "李四", comment: "啊啊啊啊啊啊啊啊啊啊啊啊啊" },
  { id: 2, name: "王五", comment: "啛啛喳喳错错错错错错错错错" },
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
  const [loading, setLoading] = useState<boolean>(false);
  const [selectMenu, setSelectMenu] = useState<string>(menus[0].key);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: -1,
    name: "",
    account: "",
  });
  const [listData, setListData] = useState<ListDataProps>();

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

  const menuItems = useMemo(() => {
    switch (selectMenu) {
      case "0":
        return listData && listData.map((item) => <ActicleItem data={item} />);
      case "1":
        return (
          // TODO 发布数据
          listData && listData.map((item) => <ActicleItem data={item} />)
        );
      case "2":
        return follows.map((item) => <FollowItem data={item} />);
      case "3":
        return (
          // TODO 发布数据
          listData && listData.map((item) => <ActicleItem data={item} />)
        );
      case "4":
        return (
          // TODO 发布数据
          listData && listData.map((item) => <ActicleItem data={item} />)
        );

      default:
        break;
    }
  }, [selectMenu, listData]);

  useEffect(() => {
    async function initInfo() {
      try {
        setLoading(true);
        const userInfoRes = await getUserInfo();
        const articleListRes = await getArticleList();
        userInfoRes.status === "ok" && setUserInfo(userInfoRes.data);
        userInfoRes.status === "ok" && setListData(articleListRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    initInfo();
  }, []);

  return (
    <MainLayout contentType="middle" loading={loading}>
      <div className={style.personal}>
        <div className={style.left}>
          <AvatarHead userInfo={userInfo} isOwn={true} />

          <div className={style.menuDemo}>{menuElements}</div>

          <div className={style.content}>{menuItems}</div>
        </div>
        <div className={style.right}>
          <Achievement userInfo={userInfo} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Personal;
