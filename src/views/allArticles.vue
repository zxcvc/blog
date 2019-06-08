<template lang="">
    <ul class="wrap">
        <li v-for="item in articles" :key="item.id" class="article">
            <router-link :to="{path:'/article',query:{id:item._id}}">{{item.title}}</router-link>
            <div class="right">
                <p>{{item.author}}</p>
                <i>{{item.time | fmTime}}</i>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            articles: []
        }
    },
    methods: {
        async getArticles() {
            let ret = await this.$axios.get('/api/articles')
            this.articles = ret.data
        }
    },
    created() {
        this.getArticles()
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    box-sizing: border-box;
    margin: auto auto;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    li {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        .right {
            margin-right: 20px;
            display: flex;
            justify-content: space-between;
            width: 30%;
            p {
                margin: 0;
            }
        }
    }
}
</style>