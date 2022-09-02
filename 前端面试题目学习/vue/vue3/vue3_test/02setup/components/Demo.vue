<template>
	<div>Demo</div>
	<button @click="say">say hello</button>
</template>

<script>
	import {ref, reactive} from 'vue'
	export default {
		name: 'Demo',
		// beforeCreate() {
		// 	console.log('------beforeCreate------');
		// 	console.log(this, 'beforeCreate中读取this');
		// },
		// 如果有属性没有接收，控制台就会警告，但是不影响代码
		props: ['name', 'age'],
		// 这里要写一下父组件给子组件绑定的事件，如果不写控制台就会警告；但是不影响代码
		emits: ['hello'],
		setup(props, context){
			// props被整理成了一个proxy代理对象
			console.log(props, 'props');
			// context是一个对象
			console.log(context, 'context');
			// attrs捡漏props,props中没有接收的属性会这里边
			// 功能等同于Vue2中的$attrs
			console.log(context.attrs, 'context.attrs');
			console.log(context.slots, 'context.slots');
			// console.log('------setup------');
			// console.log(this, 'setup中读取this');
			// console.log(props, context);
			function say() {
				context.emit('hello');
			}
			return {
				say
			}
		}
	}
</script>

