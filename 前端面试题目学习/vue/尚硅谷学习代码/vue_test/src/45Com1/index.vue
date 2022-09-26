<template>
    <div>
        45Com1
    </div>
</template>
<script>
    export default {
		name:'Com1',
        beforeCreate() {
            console.log('Com1 ---- beforeCreate')
            this.$nextTick(() => {
				console.log('Com1 nextTick');
			})
        },
        created() {
            console.log('Com1 ---- created')
        },
        beforeMount() {
            console.log('Com1 ---- beforeMount')
        },
        mounted() {
            console.log('Com1 ---- mounted')
            setTimeout(() => {
                console.log('hahah');
            })
        },
	}
</script>