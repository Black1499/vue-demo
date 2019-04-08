<template>
	<el-container>
		<el-header>
		</el-header>
		<div>
			<DataShow :dataCount="dataCount"></DataShow>
		</div>
		<el-container>
			<el-aside width="350px">
				<Aside :models="models"></Aside>
			</el-aside>
			<el-main>
				<el-row>
					<el-col>
						<Invoking></Invoking>
					</el-col>
				</el-row>
				<el-row>
					<el-col>
						<ModelInfo></ModelInfo>
					</el-col>
				</el-row>
				<el-row>
					<el-col>
						<Performance></Performance>
					</el-col>
				</el-row>
			</el-main>
		</el-container>

	</el-container>
</template>

<script>
	import Nav from "../../components/nav/index.vue";
	import DataShow from "../../components/dataShow/index.vue";
	import Aside from "../../components/aside/index.vue";
	import Invoking from "../../components/invoking/index.vue";
	import ModelInfo from "../../components/modelInfo/index.vue";
	import Performance from "../../components/performance/index.vue";

	export default {
		data() {
			return{
				dataCount:[],
				models:[],
			}
		},
		components: {
			Nav,
			DataShow,
			Aside,
			Invoking,
			ModelInfo,
			Performance
		},
		created() {
			this.getCount();
			this.getModel();
		},
		methods:{
			getCount(){
				this.$http.get('http://localhost:7777/getCount')
				.then(response => this.dataCount = response.data);
			},
			getModel(){
				this.$http.get('http://localhost:7777/getModel')
				.then(response => this.models = response.data);
			}
		}
	}
</script>

<style scoped>
	.el-header {
		/* background-color: #1E90FF;
		text-align: center; */
		display: none;
	}

	.el-aside {
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		width: 100%;
		color: #333;
		line-height: 160px;
		padding: 0px;
		margin-right: 20px;
		height: 1300px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}


	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>
