import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import './assets/css/global.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import VueKinesis from "vue-kinesis";
import { createStore } from 'vuex'
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'

// 创建一个新的 store 实例
const store = createStore({
    state: {
        // 这里定义你的全局变量
        slide: 'slide-left'
    },
    mutations: {
        // 这里定义用于修改全局变量的mutation函数
        setSlide(state, value) {
            state.slide = value;
        }
    },
    actions: {
        // 这里定义触发mutation的action函数（可选）
        updateSlide({ commit }, value) {
            commit('setSlide', value);
        }
    },
    getters: {
        // 这里定义获取全局变量的getter函数（可选）
        getSlide(state) {
            return state.slide;
        }
    }
})


createApp(App).use(Vue3VideoPlayer, {
    lang: 'zh-CN'
}).use(router).use(ElementPlus).use(VueKinesis).use(store).mount('#app')
