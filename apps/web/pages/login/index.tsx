import { useRouter, Router } from "next/router";
import React, { ChangeEvent, FC, useState } from "react";
import style from "./index.module.scss";
import { login } from "api-sdk";
import { Input, Button } from "@arco-design/web-react";
import { setToken } from "../../utils/auth_token";

const Login: FC = () => {
  const router = useRouter();

  const [info, setInfo] = useState<{
    account: string;
    password: string;
  }>({
    account: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (value: string, e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const data = { ...info, [name]: value };
    setInfo(data);
  };

  const handleLogin = () => {
    setLoading(true);
    login().then((res) => {
      console.log(res);
      setToken(res.data.token);
      router.push("/");
      setLoading(false);
    });
  };

  return (
    <div className={style.login}>
      <div className={style.form}>
        <h2 className={style.title}>login</h2>
        <div>
          <Input
            placeholder="请输入账号、手机号、邮箱"
            name="account"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input.Password
            placeholder="请输入密码"
            name="password"
            onChange={handleChange}
          />
          <div className={style.find}>
            <span onClick={() => router.push("/register")}>注册!</span>
            <span>忘记密码?</span>
          </div>
        </div>
        <div>
          <Button onClick={handleLogin} loading={loading}>
            登录
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
