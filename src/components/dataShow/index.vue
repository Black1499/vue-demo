<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="mDiv">
					<div class="mImg pink"><img src="../../assets/main.png" /></div>
					<div class="mData">
						<table>
							<tr>
								<td class="number">{{dataCount.model}}</td>
							</tr>
							<tr>
								<td class="name">模型总数</td>
							</tr>
						</table>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="mDiv">
					<div class="mImg yellow"><img src="../../assets/model.png" /></div>
					<div class="mData">
						<table>
							<tr>
								<td class="number">{{dataCount.allUse}}</td>
							</tr>
							<tr>
								<td class="name">近30天总调用量</td>
							</tr>
						</table>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="mDiv">
					<div class="mImg green"><img src="../../assets/feedback.png" /></div>
					<div class="mData">
						<table>
							<tr>
								<td class="number">{{dataCount.avgUse}}</td>
							</tr>
							<tr>
								<td class="name">近30天平均调用量</td>
							</tr>
						</table>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="mDiv">
					<div class="mImg blue"><img src="../../assets/person.png" /></div>
					<div class="mData">
						<table>
							<tr>
								<td class="number">{{dataCount.user}}</td>
							</tr>
							<tr>
								<td class="name">用户总数</td>
							</tr>
						</table>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:['dataCount']
	}
</script>

<style scoped="scoped">
	.el-row {
		margin-bottom: 20px;
		margin-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.mDiv {
		border-radius: 4px;
		border: 1px #EBEEF5 solid;
		height: 120px;
		display: flex;
	}

	.mImg {
		width: 40%;
		height: 120px;
		display: flex;
		align-items: center;/*水平居中*/
		justify-content: center;/*垂直居中*/
	}

	img {
		width: 40px;
		height: 40px;
	}
	.pink{
		background-color: #FF69B4;
	}
	.yellow{
		background-color: #FFD700;
	}
	.green{
		 background-color: #32CD32;
	}
	.blue{
		background-color: #4169E1;
	}
	
	.mData{
		width: 60%;
		height: 120px;
		display: flex;
		align-items: center;/*水平居中*/
		justify-content: center;/*垂直居中*/
	}
	
	td{
		text-align: center;
	}
	
	.number{
		font-size: 32px;
		color: lightgray;
		font-weight: 500;
	}
	
	.name{
		font-size: 14px;
		color: lightgray;
		font-weight: 500;
	}
	
</style>
