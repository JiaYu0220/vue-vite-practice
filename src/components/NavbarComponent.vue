<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">香香餅乾</span>
      <button type="button" class="btn">
        購物車
        <span class="badge rounded-pill bg-danger">{{ cart.length }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import cartStore from '../stores/cartStore.js'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(cartStore, ['cart'])
  }
}
</script>
