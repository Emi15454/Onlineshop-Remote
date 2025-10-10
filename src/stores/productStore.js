import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  actions: {
    async loadProducts() {
      const res = await fetch("../public/products.json")
      this.products = await res.json()
    }
  }
})
