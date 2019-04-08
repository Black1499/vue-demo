<template>
	<div class="main">
		<div class="head">性能指标</div>
		<div class="content">
			<div id="echart1"></div>
			<div id="echart2"></div>
		</div>
	</div>
</template>

<script>
	var echarts = require('echarts');

	export default {
		mounted() {
			this.drawOne();
			this.drawTwo();
		},
		methods: {
			drawOne() {
				let myChart = echarts.init(document.getElementById("echart1"));
				myChart.setOption({
					tooltip: {},
					color: ['blue', 'green'],
					legend: {
						top: '93%',
						left: '40%',
						itemWidth: 10,
						itemHeight: 10,
						data: [{
							name: 'TPR',
							icon: 'circle',

						}, {
							name: 'TNR',
							icon: 'circle',
						}]
					},
					radar: {
						center: ['50%', '47%'],
						name: {
							textStyle: {
								color: 'black'
							}
						},
						indicator: [{
								name: '指标一',
								max: 80
							},
							{
								name: '指标二',
								max: 80
							},
							{
								name: '指标三',
								max: 80
							},
							{
								name: '指标四',
								max: 80
							},
							{
								name: '指标五',
								max: 80
							},
							{
								name: '指标六',
								max: 80
							},
							{
								name: '指标七',
								max: 80
							},
							{
								name: '指标八',
								max: 80
							},
							{
								name: '指标九',
								max: 80
							},
							{
								name: '指标十',
								max: 80
							},

						]
					},
					series: [{
						type: 'radar',
						data: [{
								value: [60, 30, 40, 50, 40, 70, 50, 40, 70, 50],
								name: 'TPR',
								lineStyle: { // 单项线条样式。
									color: 'blue'
								}
							},
							{
								value: [40, 20, 60, 80, 60, 20, 10, 50, 60, 40],
								name: 'TNR',
								lineStyle: { // 单项线条样式。
									color: 'green'
								}
							}
						]
					}]
				});
				//用于使chart自适应高度和宽度
				window.onresize = function() {
					//重置容器高宽
					resizeWorldMapContainer();
					myChart.resize();
				};
			},
			drawTwo() {
				let myChart = echarts.init(document.getElementById("echart2"));
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					// 颜色盘，对应legend.data内颜色
					color:['#BBFFFF','#AEEEEE','#00C5CD','#00868B','#96CDCD','00F5FF'],
					legend: {
						left: '70%',
						top: '40%',
						itemWidth: 10,
						itemHeight: 10,
						orient: 'vertkcal',
						data: ['Under 5 Years', '5 to 13 Years', '14 to 17 Years', '18 to 24 Years', '25 to 44 Years', '45 to 64 Years','65 Years and Over']
					},
					grid: {
						left: '0%',
						bottom: '10%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT','','',''],
						splitLine: {
							show: false //是否展示分割线
						},
						axisLine: {
							lineStyle: {
								color: '#D3D3D3',
								width: 1
							}
						},
						axisLabel: {
							color: 'gray'
						},
						axisTick: {
							show: false
						}
					}],
					yAxis: [{
						type: 'value',
						splitLine: {
							show: false
						},
						axisLine: {
							show: false
						},
						axisLabel: {
							color: 'gray'
						},
						axisTick: {
							show: false
						}
					}],
					series: [{
							name: 'Under 5 Years',
							type: 'bar',
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: '5 to 13 Years',
							type: 'bar',
							stack: 'one', //同一柱
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '14 to 17 Years',
							type: 'bar',
							stack: 'one',//同一柱
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '18 to 24 Years',
							type: 'bar',
							stack: 'one',//同一柱
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '25 to 44 Years',
							type: 'bar',
							data: [862, 1018, 964, 1026, 1679, 1600, 1570]
						},
						{
							name: '45 to 64 Years',
							type: 'bar',
							barWidth: 5,
							stack: 'two',
							data: [620, 732, 701, 734, 1090, 1130, 1120]
						},
						{
							name: '65 Years and Over',
							type: 'bar',
							stack: 'two',
							data: [120, 132, 101, 134, 290, 230, 220]
						}
					]
				});
			}
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

	.content {
		height: 400px;
		width: 99.8%;
		background-color: #FFF;
		border: 1px #EBEEF5 solid;
		border-radius: 4px;
		display: flex;
	}

	#echart1{
		width: 50%;
		height: 400px;
	}
	#echart2{
		width: 50%;
		height: 400px;
	}
</style>
