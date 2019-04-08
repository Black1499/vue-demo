<template>
	<div class="main">
		<div class="head">模型服务信息</div>
		<div class="info">
			<table>
				<tr>
					<td>名称</td>
					<td>{{model.name}}</td>
					<td>状态</td>
					<td>{{model.status}}</td>
				</tr>
				<tr>
					<td>创建人</td>
					<td>{{model.creator}}</td>
					<td>创建时间</td>
					<td>{{model.createTime}}</td>
				</tr>
				<tr>
					<td>算法场景类型</td>
					<td>{{model.type}}</td>
					<td>算法实现</td>
					<td>{{model.invoke}}</td>
				</tr>
				<tr>
					<td>最近修改时间</td>
					<td>{{model.updateTime}}</td>
					<td>最新版本号</td>
					<td>{{model.version}}</td>
				</tr>
				<tr>
					<td>分享状态</td>
					<td>{{model.sharedStatus}}</td>
					<td>调用量</td>
					<td>{{model.useCount}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				model: {
					name:'神经网络模型',
					creator:'陶贝贝',
					type:'分类',
					updateTime:'2018-09-21 21:23:11',
					sharedStatus:'未分享',
					status:'待上线',
					createTime:'2018-09-12 21:21:23',
					invoke:'CNN',
					version:'0.0.1',
					useCount: '234,891',
				}
			};
		}
	}
</script>

<style scoped>
	.main {
		width: 100%;
		margin-top: 20px;
	}

	.head {
		padding-left: 20px; 	
		height: 55px;
		width: 97.6%;
		background-color: #FFF;
		border: 1px #EBEEF5 solid;
		border-radius: 4px;
		text-align: left;
		display: flex;
		align-items: center;
	}

	.info {
		height: 250px;
		width: 99.8%;
		background-color: #FFF;
		border: 1px #EBEEF5 solid;
		border-radius: 4px;
	}
	table{
		width: 96%;
		margin: auto;
		margin-top: 20px;
		border-collapse: collapse;
	}
	
	td:first-child{
		border-left: 1px white solid;
	}		
	tr:nth-child(even){
		background-color: #EBEEF5;
	}
	td{
		padding-left: 20px;
		height:40px;
		line-height: 40px;
		border-left: 1px #D3D3D3 solid;
		font-size: 12px;
	}
</style>
