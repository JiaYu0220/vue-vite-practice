import { defineStore } from 'pinia'
import productsStore from './productsStore.js'

export default defineStore('cartStore', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(productId, quantity = 1) {
      const currentCart = this.cart.find((item) => item.productId === productId)
      if (currentCart) {
        currentCart.quantity += quantity
      } else {
        const item = { productId, quantity, id: new Date().getTime() }
        this.cart.push(item)
      }
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id)
      this.cart.splice(index, 1)
    },
    updateQty(id, e) {
      console.log(e.target.value)
      const currentCart = this.cart.find((item) => item.productId === id)
      currentCart.quantity = parseInt(e.target.value)
    }
  },
  getters: {
    cartList: ({ cart }) => {
      // 1. 購物車品項資訊要整合產品資訊
      const { products } = productsStore()
      const carts = cart.map((item) => {
        const product = products.find((product) => product.id === item.productId)
        return {
          ...item,
          product,
          // 2. 計算小計
          subtotal: item.quantity * product.price
        }
      })
      console.log(carts)

      // 3. 計算總金額
      const total = carts.reduce((a, b) => a + b.subtotal, 0)

      return {
        carts,
        total
      }
    }
  }
})
