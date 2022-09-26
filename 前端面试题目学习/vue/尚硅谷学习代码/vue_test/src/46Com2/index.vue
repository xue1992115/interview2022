<template>
    <div>
        46Com2
    </div>
</template>
<script>
    export default {
		name:'Com2',
        beforeCreate() {
            console.log('Com2 ---- beforeCreate')
        },
        created() {
            console.log('Com2 ---- created')
            this.$nextTick(() => {
				console.log('Com2 nextTick');
			})
        },
        beforeMount() {
            console.log('Com2 ---- beforeMount')
        },
        mounted() {
            console.log('Com2 ---- mounted')
            
        },
	}
</script>