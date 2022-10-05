import { Api } from "../types";

type UserInfoType = {
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
};

export const getUserInfo: Api<UserInfoType> = async () => {
  return {
    status: "ok",
    data: {
      id: 12345678,
      name: "张三",
      account: "12233335555",
    },
  };
};
