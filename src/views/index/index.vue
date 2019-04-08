<template>
	<el-container>
		<el-header>
			<Nav></nav>
		</el-header>
		<router-view></router-view>
	</el-container>
</template>

<script>
	import Nav from "../../components/nav/index.vue";
	
	export default {
		components: {
			Nav
		}
	}
</script>

<style scoped>
	.el-header {
		background-color: #1E90FF;
		text-align: center;
	}
</style>
