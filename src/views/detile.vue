<template>
    <div class="wrap">
        <header>
            <h2>{{article.title}}</h2>
            <div class="right">
                <p>{{article.author}}</p>
                <i>{{article.time | fmTime}}</i>
            </div>
        </header>
        <div class="content">{{article.content}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            article: {}
        };
    },
    methods: {
        async getDetile() {
            let ret = await this.$axios.get('/api/detile', {
                params: { id: this.$route.query.id }
            })
            this.article = ret.data
        }
    },
    created() {
        this.getDetile()

    }
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: baseline;
        h2 {
            flex: 3;
            text-align: center;
        }
        .right {
            flex: 1;
            width: 30%;
            display: flex;
            justify-content: space-evenly;
        }
    }
}
</style>
