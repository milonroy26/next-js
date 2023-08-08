import React from "react";
import style from "./css/home.module.css";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className={style.titleColor}>This is a Home page</h1>
    </div>
  );
};

export default page;
