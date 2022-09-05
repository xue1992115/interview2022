import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
// Provider保证app中的所有容器组件都能接收到store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// 并且通过react-redux使用之后，自动具有检测能力，不需要以下代码啦
// 原因是因为：connect生成的组件做的操作
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })
