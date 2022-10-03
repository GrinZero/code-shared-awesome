import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import style from "./index.module.css";
import { register } from "api-sdk";
const Login: FC = () => {
  useEffect(() => {
    console.log(
      register().then((res) => {
        console.log(res);
      })
    );
  });
  return <h2>哈哈哈</h2>;
};
export default Login;
