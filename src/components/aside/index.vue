<template>
	<div>
		<el-row>
			<div class="aDiv">
				<el-input v-model="input" placeholder="输入关键字搜索"></el-input>
			</div>
			<div class="bDiv">
				<Card :cardModel="models"></Card>
			</div>
		</el-row>
	</div>
</template>

<script>
	import Card from "../card/index.vue"
	export default {
		data() {
			return {
				input: ''
			};
		},
		components:{
			Card
		},
		props:['models']
	}
</script>

<style scoped>
	.el-row {
		padding-right: 20px;
		padding-left: 20px;
	}

	.aDiv {
		height: 80px;
		border: 1px #EBEEF5 solid;
		border-radius: 4px;
		padding-right: 20px;
		padding-left: 20px;
	}

	.el-input {
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.bDiv {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
