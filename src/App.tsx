// react根组件
import React, { useState } from "react";
import smallImg from "./assets/imgs/5kb.png";
import bigImg from "./assets/imgs/22kb.png";
import "./app.css";
import "./app.less";
import DcClass from "./components/Class";

function App() {
  const [val, setVal] = useState<string | undefined>(undefined);
  return (
    <>
      <DcClass></DcClass>
      <h2>webpack5-react-ts</h2>
      <p>{val}</p>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />
      <div className="smallImg"></div> {/* 小图片背景容器 */}
      <div className="bigImg"></div> {/* 大图片背景容器 */}
    </>
  );
}
export default App;
