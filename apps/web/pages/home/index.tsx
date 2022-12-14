import React, { useEffect, useState } from "react";
import { getArticleList } from "api-sdk";
import { ListDataProps } from "../../types";
import style from "./index.module.scss";

import HomeLeft from "../../components/home/home_left";
import HomeRight from "../../components/home/home_right";
import MainLayout from "../../layouts/main-layout";

const Home: React.FC = () => {
  const [listData, setListData] = useState<ListDataProps>();

  useEffect(() => {
    let getData = async () => {
      const result = await getArticleList();
      const listData = result.data;
      setListData(listData);
    };
    getData();
  }, []);

  return (
    <>
      <MainLayout>
        <div className={style["content"]}>
          {listData && <HomeLeft listData={listData}></HomeLeft>}
          <HomeRight></HomeRight>
        </div>
      </MainLayout>
    </>
  );
};
export default Home;
