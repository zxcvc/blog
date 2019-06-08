<template>
  <div class="container-fluid">
    <ul class="row">
      <li class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="body">
          <router-link :to="{path:'/album',query:{id:1}}" tag="div">
            <img src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg">
          </router-link>
        </div>
        <strong class="title">title</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import album from "./album.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    album
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  .row {
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    padding: 0;

    li {
      padding: 0;
      margin: 1%;
      // height: 260px;
      background-color: rgb(128, 95, 95);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .title {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .body {
        flex: 8;
        height: 80%;
        background-color: chocolate;

        div {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
