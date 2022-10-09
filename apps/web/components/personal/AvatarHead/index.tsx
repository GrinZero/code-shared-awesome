import { Avatar } from "@arco-design/web-react";
import React from "react";
import style from "./index.module.scss";
import {
  IconEdit,
  IconGithub,
  IconQq,
  IconUser,
  IconWeibo,
} from "@arco-design/web-react/icon";

import { UserInfo } from "../../../pages/personal";

interface AvatarHeadProps {
  userInfo: UserInfo;
  isOwn: boolean;
}

const AvatarHead: React.FC<AvatarHeadProps> = ({
  userInfo = {
    id: 0,
    name: "",
    account: "",
  },
  isOwn = true,
}) => {
  // const { userInfo, isOwn } = props;

  const handleClick = () => {
    console.log(isOwn ? "是我" : "不是我");
  };

  return (
    <div className={style.avatarhead}>
      <div className={style.avatar}>
        <Avatar
          triggerIcon={<IconEdit />}
          onClick={() => {}}
          style={{ backgroundColor: "#14C9C9" }}
          className={style.avatarImg}
        >
          <IconUser />
        </Avatar>
      </div>

      <div className={style.right}>
        <div className={style.name}>
          <p>{userInfo.name || "未知姓名"}</p>
        </div>
        <div className={style.oth}>
          <p className={style.social}>
            <IconGithub />
            <IconWeibo />
            <IconQq />
          </p>
          <p className={style.edit} onClick={handleClick}>
            {isOwn ? "编辑个人资料" : "关注"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarHead;
