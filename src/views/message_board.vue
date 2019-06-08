<template>
    <div class="container">
        <div class="editor">
            <div class="row">
                <div class="col-lg-7">
                    <textarea class="form-control" rows="7" maxlength="200" placeholder="最多200字" v-model="msg"></textarea>
                </div>
            </div>
            <button class="btn btn-info" @click="publish">留言</button>
        </div>
        <ul class="board">
            <li v-for="item in messages" :key="item._id">
                <dl v-cloak>
                    <dt>{{item.message}}</dt><br>
                    <dd>{{item.username}}</dd>
                    <dd><i>{{item.time | fmTime}}</i></dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "",
            username: "",
            messages: []
        };
    },
    methods: {
        open(msg, typ, duration) {
            this.$Message({
                message: msg,
                type: typ,
                duration: duration,
                center: true,
                onClose: this.get_message
            })
        },
        async publish() {
            let user = localStorage.getItem("user") || JSON.stringify({ username: '匿名' })
            this.username = JSON.parse(user).username;
            let message_info = {
                message: this.msg,
                time: new Date(),
                username: this.username
            }
            let ret = await this.$axios.post('/api/addMessage', this.$qs.stringify(message_info))
            if (ret) {
                this.username = ''
                this.open('留言成功', 'success', 1500)
            } else {
                this.open('留言失败 请稍后重试', 'error', 1500)
            }
        },
        async get_message() {
            let ret = await this.$axios.get('/api/getMessage')
            this.messages = ret.data
        }
    },
    created() {
        this.get_message()
    }
};
</script>

<style lang="scss" scoped>
.col-lg-7 {
    margin-bottom: 2%;
}

.container {
    .editor {
        margin-bottom: 5%;
    }
    .board {
        width: 75%;
        padding-left: 0;
        li {
            margin-bottom: 8%;
        }
        p {
            word-break: break-all;
        }
    }
}
</style>
