import React from "react";
import style from "./index.module.scss";
import MainLayout from "../../layouts/main-layout";
import Achievement from "./Achievement";

const Personal: React.FC = () => {
  return (
    <MainLayout contentType="middle">
      <div className={style.personal}>
        <div className={style.left} style={{ height: 1000 }}>
          a
        </div>
        <div className={style.right}>
          <Achievement />
        </div>
      </div>
    </MainLayout>
  );
};

export default Personal;
