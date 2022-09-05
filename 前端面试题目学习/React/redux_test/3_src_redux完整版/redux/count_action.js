/* 
	该文件专门为Count组件生成action对象
	action对象是包含type和data
	该函数返回type和data即可
*/
import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
