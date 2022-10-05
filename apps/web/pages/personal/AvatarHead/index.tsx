import { Avatar } from "@arco-design/web-react";
import {
  IconEdit,
  IconGithub,
  IconQq,
  IconUser,
  IconWeibo,
} from "@arco-design/web-react/icon";
import React, { useState } from "react";
import style from "./index.module.scss";

interface AvatarHeadProps {
  userId: string;
}

const AvatarHead: React.FC<AvatarHeadProps> = (props) => {
  const { userId } = props;
  const [userInfo, setUserInfo] = useState<{
    name: string;
  }>({
    name: "丶明旭",
  });

  return (
    <div className={style.avatarhead}>
      <div className={style.avatar}>
        <Avatar
          triggerIcon={<IconEdit />}
          onClick={() => {}}
          style={{ backgroundColor: "#14C9C9" }}
          size={120}
        >
          <IconUser />
        </Avatar>
      </div>

      <div className={style.right}>
        <div className={style.name}>
          <p>{userInfo.name}</p>
        </div>
        <div className={style.oth}>
          <p className={style.social}>
            <IconGithub />
            <IconWeibo />
            <IconQq />
          </p>
          <p className={style.edit}>编辑个人资料</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarHead;
