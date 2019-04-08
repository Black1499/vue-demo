<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>模型服务列表</span>
		</div>
		<div v-for="model in cardModel" :key="model" class="item">
			{{model}}
		</div>
	</el-card>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:['cardModel']
	}
</script>

<style>
	.item {
		font-size: 14px;
		color: dimgray;
		margin-bottom: 18px;
		height: 20px;
		text-align: left;
		display: flex;
		align-items: center;
		font-weight: 500;
	}

	.clearfix {
		font-size: 16px;
		height: 20px;
		text-align: left;
		display: flex;
		align-items: center;
		font-weight: 500;
	}

	.box-card {
		width: 350px;
		background-color: #F5F5F5;
	}
</style>
