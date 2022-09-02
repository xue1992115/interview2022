<template>
	<Demo name='张三' :age='20' @hello='sayHello'>
	<template>
		<span>觉得就到家</span>
		<span>觉得就到家</span>
	</template>
	</Demo>
</template>

<script>
import Demo from './components/Demo.vue'
	export default {
		name: 'App',
		components: {
			Demo
		},
		setup() {
			function sayHello() {
				alert('sayHello')
			}
			return {
				sayHello
			}
		}
	}
</script>

