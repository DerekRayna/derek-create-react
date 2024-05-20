// react根组件
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState(123333);
  return <h2>webpack5-react-ts{val}</h2>;
}
export default App;
