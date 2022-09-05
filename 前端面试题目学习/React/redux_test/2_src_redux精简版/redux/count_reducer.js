/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
	action是一个对象。对象中包含type和data
*/

const initState = 0; //初始化状态
// reducer第一次执行的时候 preState初始值是undefined
// aciton对象中的type是redux初始的一个随机的值
export default function countReducer(preState = initState, action) {
  // console.log(preState);
  //从action对象中获取：type、data
  const { type, data } = action;
  //根据type决定如何加工数据
  switch (type) {
    case "increment": //如果是加
      return preState + data;
    case "decrement": //若果是减
      return preState - data;
    default:
      return preState;
  }
}
