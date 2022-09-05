import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />, document.getElementById("root"));
// 监听状态的变化，监听之后自动调用render方法
// 更新界面
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
