// 只应用于client的插件
import Vue from 'vue'

Vue.prototype.$fooClient = (msg) => {
    console.log('I am foo client: ', msg);
}