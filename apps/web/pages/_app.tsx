import Head from "next/head";
import { useEffect, FC } from "react";
import "../styles/global.css";
import "@arco-design/web-react/dist/css/arco.css";
import "../styles/normalize.css";
import "../styles/common.css";
const App: FC<any> = ({ Component = null }) => {
  useEffect(() => {
    document.body.setAttribute("arco-theme", "dark");
  }, []);
  return (
    <>
      <Head>
        <title>Code Show</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component />
    </>
  );
};
export default App;
