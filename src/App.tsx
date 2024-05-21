// react根组件
import React, { useState } from "react";
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
    </>
  );
}
export default App;
