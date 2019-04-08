<template>
	<div>
		<el-row>
			<el-col :span="4">
				<div class="title">算法模型管理系统</div>
			</el-col>
			<el-col :span="18">
				<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="#1E90FF"
				 text-color="#fff" active-text-color="#ffd04b" router=true>
					<el-menu-item index="/model">
						<div class="menu-item" route="{name: 'model'}"><img src="../../assets/main.png" />					
						模型管理
							<!-- <router-link :to="{name: 'model'}">模型管理</router-link> -->
						</div>
					</el-menu-item>
					<el-menu-item index="/market">
						<div class="menu-item"><img src="../../assets/model.png" />
							模型市场
						</div>
					</el-menu-item>
					<el-menu-item index="monitor">
						<div class="menu-item"><img src="../../assets/monitor.png" />
							性能监控
						</div>
					</el-menu-item>
					<el-menu-item index="feedBack">
						<div class="menu-item"><img src="../../assets/feedback.png" />
							反馈
						</div>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="2" class="pDiv">
				<img class="pIcon" src="../../assets/person.png" />
				<div class="person">技术部淘小宝</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'nav'
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}

	.title {
		font-weight: 1000;
		font-size: 22px;
		color: white;
		line-height: 60px;
		margin-right: 30px
	}

	.menu-item {
		font-size: 14px;
		font-weight: 600;
	}

	.menu-item img {
		width: 20px;
		height: 18px;
		margin-top: -4px;
		margin-left: 2px;
	}


	.pDiv {
		display: flex;
	}

	.pIcon {
		width: 50px;
		height: 50px;
		margin-top: 5px;
	}

	.person {
		width: 50px;
		height: 50px;
		font-size: 14px;
		word-break: break-all;
		white-space: normal;
		line-align: 10px;
		margin-top: 10px;
		font-weight: 500;
		color: white;
	}
</style>
