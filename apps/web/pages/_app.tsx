import Head from "next/head";
import { useEffect } from "react";
import { AppProps } from "../types";

import "../styles/global.css";
import "@arco-design/web-react/dist/css/arco.css";
import "../styles/normalize.css";
import "../styles/common.css";

export default function App(props: AppProps) {
  const { Component } = props;
  useEffect(() => {
    document.body.setAttribute("arco-theme", "dark");
  }, []);
  return (
    <>
      <Head>
        <title>Code Show</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component />
    </>
  );
}
