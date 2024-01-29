<template>
  <div class="row row-cols-3 my-3 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <CardComponent :product="product"></CardComponent>
    </div>
  </div>
</template>

<script>
import productsStore from '../stores/productsStore.js'
import { mapState } from 'pinia' //要取得多個 getters，可用 mapGetters，但之後可能會棄用所以改用 mapState
import CardComponent from './CardComponent.vue'

export default {
  components: {
    CardComponent
  },
  data() {
    return {}
  },
  computed: {
    // 只取用，不更改
    // store 檔案名稱，要取用的 getters 的陣列
    ...mapState(productsStore, ['sortProducts']) // v-for 的 products 換成 sortProducts
  }
}
</script>
