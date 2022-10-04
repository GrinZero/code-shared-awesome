import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import style from "./index.module.css";
import { register } from "api-sdk";
import { Form, Input, Button, Checkbox } from "@arco-design/web-react";

const FormItem = Form.Item;

const Login: FC = () => {
  useEffect(() => {
    console.log(
      register().then((res) => {
        console.log(res);
      })
    );
  });

  return (
    <div className={style.login}>
      <div className="style.form">
        <div>
          <Input placeholder="请输入账号、手机号、邮箱" />
        </div>
        <div>
          <Input.Password placeholder="请输入密码" />
        </div>
        <div>
          <Button>登录</Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
