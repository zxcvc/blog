<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav" id="ul">
          <li>
            <router-link to="/home">主页</router-link>
          </li>
          <li>
            <router-link to="/allArticles">所有文章</router-link>
          </li>
          <li>
            <router-link to="/messageboard">留言</router-link>
          </li>
          <li>
            <router-link to="/albumcard">相册</router-link>
          </li>
          <li>
            <a href="#" id="last">
              <login @toLogOut="toLogOut" v-if="componentId==='login'"></login>
              <logout @toLogIn="toLogIn" v-if="componentId==='logout'"></logout>
            </a>
          </li>
          <li>
            <router-link to="/addArticle" class="add">
              <span class="glyphicon glyphicon-edit"></span>
            </router-link>
          </li>
        </ul>
        <!-- <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入关键字">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>-->
      </div>
    </div>
  </nav>
</template>

<script>
import login from "./login.vue";
import logout from "./logout.vue";
export default {
  data() {
    return {
      componentId: "logout"
    };
  },
  components: {
    login,
    logout
  },
  methods: {
    toLogIn() {
      this.componentId = "login";
    },
    toLogOut() {
      this.componentId = "logout";
    }
  }
};
</script>

<style lang="scss" scoped>
// nav{
//   border: 0!important;
// }
#bs-example-navbar-collapse-1 {
  #ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      font-size: 16px;
      #last {
        padding-top: 0;
        padding-bottom: 0;
      };
      .add{
        font-size: 18px;
        color: rebeccapurple;
      }
    }
  }
}
.nav navbar-nav .navbar-right {
  ul {
    li {
      font-size: 50px;
    }
  }
}
</style>
