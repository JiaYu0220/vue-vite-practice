<template>
  <div class="card">
    <img :src="product.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h6 class="card-title">
        {{ product.title }}
        <span class="float-end">$ {{ product.price }}</span>
      </h6>
      <a href="#" class="btn btn-outline-success w-100" @click.prevent="addToCart(product.id)"
        >加入購物車</a
      >
    </div>
  </div>
</template>

<script>
import cartStore from '../stores/cartStore.js'
import { mapActions } from 'pinia' //要取得多個 getters，可用 mapGetters，但之後可能會棄用所以改用 mapState

export default {
  data() {
    return {}
  },
  props: ['product'],
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
