<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model='person.firstName'>
	<br>
	名：<input type="text" v-model='person.lastName'>
	<br>
	全名：<input type="text" v-model='person.fullname'>
</template>

<script>
	// 组合式的API,微微体现了
	import {ref, reactive, computed} from 'vue'
	export default {
		name: 'Demo',
		// computed: {
		// 	fullname() {
		// 		return this.person.firstName + this.person.lastName
		// 	}
		// },
		setup(props, context){
			// Proxy实例对象
			const person = reactive({
				firstName: '张',
				lastName: '三'
			})
			const arr = reactive
			// ComputedRefImpl 
			// let fullname = computed(() => {
			// 	return person.firstName + person.lastName
			// })
			// 简写（fullname是只读的不能修改）
			// person.fullname = computed(() => {
			// 	return person.firstName + person.lastName
			// })
			// 完整的写的
			person.fullname = computed({
				get() {
					return `${person.firstName}-${person.lastName}`
				},
				set(value) {
					const split = value.split('-');
					person.firstName = split[0]
					person.lastName = split[1]
				}
			})
			return {
				person
			}
		}
	}
</script>

