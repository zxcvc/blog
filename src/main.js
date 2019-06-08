import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './css/main.css'
import 'jquery/dist/jquery'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import store from '../store/store'
import preview from 'vue-photo-preview'
import lazyload from 'vue-lazyload'
import 'vue-photo-preview/dist/skin.css'
import qs from 'qs'
import {
    card,
    button,
    form,
    formItem,
    input,
    table,
    tableColumn,
    dialog,
    image,
    dropdown,
    dropdownMenu,
    dropdownItem,
    Message
} from 'element-ui'
Vue.use(preview)
Vue.use(card)
Vue.use(button)
Vue.use(form)
Vue.use(formItem)
Vue.use(input)
Vue.use(table)
Vue.use(tableColumn)
Vue.use(dialog)
Vue.use(image)
Vue.use(dropdown)
Vue.use(dropdownMenu)
Vue.use(dropdownItem)
Vue.use(lazyload, {
    loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558333261095&di=fa650d5707f50387f99a7934326c94e2&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160127%2Fmp56791937_1453886827459_16.gif'
})
Vue.prototype.$Message = Message
axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.filter('fmTime', function (val) {
    if (!val) return ''
    let date = new Date(val)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    hh = hh >= 10 ? hh : '0' + hh
    mm = mm >= 10 ? mm : '0' + mm
    ss = ss >= 10 ? ss : '0' + ss
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
    el: '#app',
    data () {
        return {

        }
    },
    router,
    store,
    render: h => h(App)
})
