<template>
  <div class="container">
    <ul class="row">
      <li v-for="item in imgSrc" :key="item.src" class="col-lg-4 col-md-6  col-sm-6 col-xs-12 myclass">
        <img v-lazy="item.src" preview="item.id" preview-text="描述文字">
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      preview:this.$route.query.id
    };
  },
  computed:{
    imgSrc(){
      return this.$store.getters.getAlbum.filter(item=>item.id===parseInt(this.$route.query.id))
    }
  },
  methods:{
  },

};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .row {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    .myclass {
      padding: 0 !important;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
