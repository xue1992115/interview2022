<template>
  <div>
	<Com1 />
	<Com2 />
  </div>
</template>
<script>
	import Com1 from './45Com1'
	import Com2 from './46Com2'
	export default {
		name:'App',
		components: {
			Com1,
			Com2
		},
		beforeCreate() {
            console.log('App ---- beforeCreate');
        },
        created() {
            console.log('App ---- created');
        },
        beforeMount() {
            console.log('App ---- beforeMount')
        },
        mounted() {
            console.log('App ---- mounted');
			this.$nextTick(() => {
				console.log('APP nextTick');
			})
        },
	}
</script>
