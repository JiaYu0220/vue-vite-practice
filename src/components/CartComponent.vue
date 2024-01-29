<template>
  <div class="bg-light p-4 mt-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>

    <table class="table align-middle" v-else>
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a
              href="#"
              class="link-dark fw-bold text-decoration-none"
              @click.prevent="removeCartItem(item.id)"
              >X</a
            >
          </td>
          <td>
            <img class="table-img" :src="item.product.imageUrl" alt="" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select
              class="form-select"
              aria-label="Default select example"
              :value="item.quantity"
              @change="(e) => updateQty(item.productId, e)"
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td class="text-end">$ {{ item.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT $ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from '../stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'updateQty'])
  },
  computed: {
    ...mapState(cartStore, ['cartList'])
  }
}
</script>
