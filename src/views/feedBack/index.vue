<template>
	<div>
		<h1>反馈页面</h1>
		 <ul>
            <li><router-link to="/feedback/model">人员列表</router-link></li>
            <li><router-link to="/feedback/market">编辑</router-link></li>
        </ul>
        <router-view></router-view>
	</div>
</template>

<script>
	import Nav from "../../components/nav/index.vue"
	export default{
		components:{
			Nav
		}
	}
</script>

<style>
</style>
