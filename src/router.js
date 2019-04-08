import Vue from 'vue'
import Router from 'vue-router'
import Monitor from './views/monitor/index.vue'
import Model from './views/model/index.vue'
import Market from './views/market/index.vue'
import Index from './views/index/index.vue'
import FeedBack from './views/feedBack/index.vue'
import App from './App.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
			children:[
				{
					path: '/',
					name: 'monitor',
					component: Monitor
				},
				{
					path: '/monitor',
					name: 'monitor',
					component: Monitor
				},
				{
					path: '/model',
					name: 'model',
					component: Model
				},
				{
					path: '/market',
					name: 'market',
					component: Market
				}
			]
        },
		{
			path: '/feedback',
			name: 'feedBack',
			component: FeedBack,
			children:[
				{
					path: '/feedback/model',
					name: 'model',
					component: Model
				},
				{
					path: '/feedback/market',
					name: 'market',
					component: Market
				}
			]
		}
    ]
})
