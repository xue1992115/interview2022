/* 
	该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant";

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
// 异步actions是要返回一个函数，函数中可以开启异步任务
// 这个函数是store帮忙调用的，会传递一个dispatch
// 或者个异步的action,store默认是不支持的，需要安装中间件redux-thunk用于支持异步的action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
