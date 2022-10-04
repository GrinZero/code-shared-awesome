import Head from "next/head";
import { useEffect } from "react";
import { AppProps } from "../type";
import "./global.css";
import "@arco-design/web-react/dist/css/arco.css";
import "./normalize.css";
import "./common.css";
export default function App(props: AppProps) {
  const { Component } = props;
  useEffect(() => {
    document.body.setAttribute("arco-theme", "dark");
  }, []);
  return (
    <>
      <Component></Component>
      <Head>
        <title>Code Show</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
