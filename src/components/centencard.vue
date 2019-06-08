<template>
    <div class="contain">
        <el-card class="box-card" v-for="item in articles" :key="item._id">
            <div slot="header" class="clearfix">
                <h3 class="titel">
                    <router-link :to="{name:'detile', query:{id:item._id}}">{{ item.title }}</router-link>
                </h3>
            </div>
            <div class="describe">{{ item.describe }}</div>
            <hr>
            <span class="author">{{ item.author }}</span> &nbsp;&nbsp;
            <i class="time" v-cloak>{{ item.time | fmTime }}</i>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: []
        };
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
.contain {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.box-card {
    width: 800px;
    margin: 20px auto;
}
</style>
