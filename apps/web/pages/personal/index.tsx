import React from "react";
import style from "./index.module.scss";
import MainLayout from "../../layouts/main-layout";
import Achievement from "./Achievement";

const Personal: React.FC = () => {
  return (
    <MainLayout contentType="middle">
      <div className={style.personal}>
        <div className={style.right}></div>
        <div className={style.left}>
          <Achievement />
        </div>
      </div>
    </MainLayout>
  );
};

export default Personal;
