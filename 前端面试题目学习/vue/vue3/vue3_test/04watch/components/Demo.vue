<template>
	<div>姓名： {{ person.name}}</div>
	<div>年龄： {{ person.age}}</div>
	<div>爱好： {{ person.other.hobby}}</div>
	<div>身高： {{ person.other.info.a.b.c}}</div>
	<hr>
	<button @click="changeName">修改姓名</button>
	<br>
	<button  @click="changeHeight">修改身高</button>
	<br>
	<button  @click="changeAge">修改年龄</button>
	<br>
	<hr>
	<div>数组： {{ arr}}</div>
	<button @click="add">增加元素</button>
	<br>
	<button  @click="deleteArr">删除元素</button>
	<br>
	<button  @click="changeArr">修改数组中的深层元素</button>
	<br>
	<button  @click="changeMark">按照下标修改数组</button>
	<br>
	<div>数字：{{number}}</div>
	<button  @click="count">计数</button>
	<div>
		测试computed中的value: {{comTest}}
	</div>
</template>

<script>
	// 组合式的API,微微体现了
	import {ref, reactive, watch, computed} from 'vue'
	export default {
		name: 'Demo',
		setup(props, context){
			const number = ref(0);
			const person = reactive({
				name: '张三',
				age: 20,
				other: {
					hobby: ['喝酒', '吸烟', '烫头'],
					info: {
						a: {
							b: {
								c: 160
							}
						}
					}
				}
			})
			const arr = reactive([1,2,3,4, { name: 'eee'}, [4,5,66]])
			// 情况一： 监听reactive生成的对象， 存在的问题就是oldValue不能准确的获取了
			// 并且深度监听是强制开启的; 设置deep: false不起作用
			// watch(person, (newValue, oldValue)=> {
			// 	console.log('person被修改啦');
			// 	console.log(newValue, oldValue);
			// }, { deep: false}) // 此例子中设置deep:false不起作用
			// // 情况二：监听对象中的某一个 ,需要采用函数返回这个属性
			// watch(() => person.name, (newValue, oldValue)=> {
			// 	console.log('name被修改啦');
			// }, { deep: false})
			// 情况三：监听对象中的某些个 ,需要采用函数返回这个属性
			// 并且newValue和oldValue都是数组的形式
			// watch([() => person.name, () => person.age], (newValue, oldValue)=> {
			// 	console.log('name或age被修改啦');
			// })
			// 情况四：监听reactive中的某个对象的时候，没有触发watch,
			// 需要开启deep: true 且存在lodValue获取不正确的问题
			watch(() => person.other, (newValue, oldValue)=> {
				console.log('other被修改啦');
				console.log(newValue, oldValue);
			}, { deep: true})
			function changeName() {
				person.name += "~"
			}
			function changeHeight() {
				person.other.info.a.b.c++
			}
			function changeAge() {
				person.age++
			}
			
			function add() {
				arr.push('增加');
			}
			function deleteArr() {
				arr.pop('增加')
			}
			function changeArr() {
				arr[4].name = 'name修改'
			}
			function changeMark() {
				arr[0] = '下标'
			}
			watch(arr, (newValue, oldValue) => {
				console.log('数组被修改啦');
			}, {deep: true})
			// watch(() => arr[0], (newValue, oldValue) => {
			// 	console.log('数组被修改啦');
			// })
			// watch(() => arr[4], (newValue, oldValue) => {
			// 	console.log('数组被修改啦');
			// 	console.log(newValue, oldValue, 'newValue, oldValue');
			// }, {deep: true})
			const comTest  = computed(() => {
				// 情况一：
				// computed中如果是返回一个number，引用对象，
				// comTest的value就是一个引用对象
				// return number
				// 情况二
				// computed中如果是返回一个number.value，comTest的value就是一个数字
				// 这两种情况在模版上没有区别
				// return number.value
				// 情况三 如果要操作，需要.value
				const num = number.value + 1;
				return num;

			})
			function count() {
				number.value ++;
			}
			console.log(comTest);
			return {
				person,
				changeName,
				changeHeight,
				changeAge,
				arr,
				add,
				deleteArr,
				changeArr,
				changeMark,
				comTest,
				number,
				count
			}
		}
	}
</script>

