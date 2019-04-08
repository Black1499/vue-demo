<template>
	<div id="main">
		<div id="head">&emsp;调用量</div>
		<div id="echart"></div>
	</div>
</template>

<script>
	var echarts = require('echarts');
	export default {
		mounted() {
			this.draw();
		},
		methods: {
			draw() {
				let myChart = echarts.init(document.getElementById("echart"));
				myChart.setOption({
					grid: {
				        left: '4%',
				        right: '4%',
				        containLabel: true
				    },
					xAxis: {
						type: 'category',
						data: ['2019-01-01', '2019-03-01', '2019-05-01', '2019-07-01', '2019-09-01', '2019-11-01'],		
				        boundaryGap: false, // 是否从端点开始
						splitLine: {
							show: false // 是否正式分割
						},
						axisLine: {  // 坐标轴设置
							lineStyle: {
								color: '#D3D3D3',
								width: 1
							}
						},
						axisLabel: { // 坐标轴文本设置
							color: 'gray'
						},
						axisTick: {
							show: false  // 是否展示坐标刻度
						}
					},
					yAxis: {
						type: 'value',
						splitLine: {
							show: false
						},
						axisLine: {
							show: false  //是否展示坐标轴
						},
						axisLabel: {
							color: 'gray'
						},
						axisTick: {
							show: false
						}

					},
					series: [{
						data: [],
						type: 'line',
						smooth: true,
						itemStyle: {
							normal: {
								lineStyle: {
									color: '#1E90FF'
								}
							}
						}
					}]
				});
				
				this.$http.get("http://localhost:7777/getInvoke")
				.then(response => {
					console.log(response.data);
					myChart.setOption({
						series:[{
							data:response.data
						}]
					});
				});
			}
		}

	}
</script>

<style>
	#main {
		width: 100%;
	}

	#head {
		height: 55px;
		width: 99.8%;
		background-color: #FFF;
		border: 1px #EBEEF5 solid;
		border-radius: 4px;
		text-align: left;
		display: flex;
		align-items: center;
	}

	#echart {
		height: 400px;
		width: 99.8%;

		background-color: #FFF;
		border: 1px #EBEEF5 solid;
		border-radius: 4px;
	}
</style>
