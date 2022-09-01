<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h3>工作种类：{{job.type}}</h3>
	<h3>工作薪水：{{job.salary}}</h3>
	<h3>测试数据{{job.a.b.c}}</h3>
	<h3>添加的属性{{job.d}}</h3>
	<h3>爱好{{hobby}}</h3>
	<button @click="changeInfo">修改人的信息</button>
	<button @click="addPro">给对象添加一个属性</button>
	<button @click="deletePro">给对象删除一个属性</button>
</template>

<script>
	import {ref, reactive} from 'vue'
	export default {
		name: 'App',
		setup(){
			//数据
			let name = ref('张三')
			let age = ref(18)
			let job = reactive({
				type:'前端工程师',
				salary:'30K',
				a: {
					b: {
						c: 666
					}
				}
			})
			const hobby = reactive(['抽烟', '喝酒', '烫头'])
			console.log(job,'job');

			//方法
			function changeInfo(){
				// name.value = '李四'
				// age.value = 48
				// console.log(job.type)
				// console.log(job, 'job')
				// job.type = 'UI设计师'
				// job.salary = '60K'
				// job.a.b.c = '60K'
				// console.log(name,age)
				hobby[0] ='学习'
			}
			function addPro() {
				job.d= '111'
			}
			function deletePro() {
				delete job.d
			}
			

			//返回一个对象（常用）
			return {
				name,
				age,
				job,
				hobby,
				changeInfo,
				addPro,
				deletePro
			}
		}
	}
</script>

