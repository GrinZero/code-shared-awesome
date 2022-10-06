import React, { useRef, useState } from "react";
import style from "./index.module.scss";
import {
  Form,
  Input,
  Button,
  Checkbox,
  FormInstance,
} from "@arco-design/web-react";
import { register } from "api-sdk";
import { IconRedo } from "@arco-design/web-react/icon";
import { useRouter } from "next/router";

const FormItem = Form.Item;

const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormInstance>(null);

  const handleRegister = async () => {
    setLoading(true);
    if (formRef.current) {
      console.log(formRef.current?.getFields());
      register().then((res) => {
        console.log(res);
        setLoading(false);
      });
    }
  };

  return (
    <div className={style.register}>
      <div className={style.form}>
        <h2>注册</h2>
        <Form
          style={{ width: 600 }}
          autoComplete="off"
          onSubmit={handleRegister}
          ref={formRef}
        >
          <FormItem
            label="账号"
            field={"account"}
            rules={[{ required: true, min: 8, message: "请确认输入账号" }]}
          >
            <Input placeholder="请输入账号" />
          </FormItem>
          <FormItem
            label="密码"
            field={"password"}
            rules={[
              { required: true, min: 8, max: 20, message: "请确认输入密码" },
            ]}
          >
            <Input placeholder="请输入密码" />
          </FormItem>
          <FormItem
            label="确认密码"
            field={"confirmPassword"}
            rules={[
              {
                required: true,
                min: 8,
                max: 20,
                message: "请确认再次输入密码",
              },
            ]}
          >
            <Input placeholder="请再次输入密码" />
          </FormItem>
          <FormItem
            label="手机号"
            field={"phoneNum"}
            rules={[
              { required: true, length: 11, message: "请确认输入手机号" },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </FormItem>
          <FormItem
            label="邮箱"
            field={"email"}
            rules={[
              {
                type: "email",
                validateLevel: "warning",
                message: "请输入正确格式邮箱",
              },
              { required: true, type: "string", message: "请输入邮箱" },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </FormItem>
          <FormItem wrapperCol={{ offset: 5 }}>
            <Checkbox>I have read the manual</Checkbox>
          </FormItem>
          <FormItem wrapperCol={{ offset: 5 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              注册
            </Button>
          </FormItem>
        </Form>
        <div className={style.return} onClick={() => router.push("/login")}>
          <IconRedo />
          返回登录
        </div>
      </div>
    </div>
  );
};

export default Register;
