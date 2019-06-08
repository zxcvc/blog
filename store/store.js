import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dialogFormVisible: false,
        show: false,
        album: [
            {
                id: 1,
                src: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
            },
            {
                id: 1,
                src: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
            },
            {
                id: 1,
                src: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            },
            {
                id: 1,
                src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg'
            },
            {
                id: 1,
                src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg'
            },
            {
                id: 1,
                src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1451330793,2242997567&fm=27&gp=0.jpg'
            },
            {
                id: 1,
                src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905452358,4132262221&fm=27&gp=0.jpg'
            }
        ]
    },
    getters: {
        getAlbum (state) {
            return state.album
        },
        dialogFormVisible (state) {
            return state.dialogFormVisible
        }
    },
    mutations: {
        loginregin (state) {
            state.show = !state.show
        },
        changeDialogFormVisible (state, val) {
            state.dialogFormVisible = val
        }
    }
})
export default store
