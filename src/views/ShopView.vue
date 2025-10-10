<script setup>
import { onMounted, ref, computed } from 'vue'
import { useProductStore } from '../stores/productStore'

const store = useProductStore()
const cart = ref([])

onMounted(async () => {
  await store.loadProducts()
})

function addToCart(product) {
  cart.value.push(product)
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}

const cartCount = computed(() => cart.value.length)
const cartTotal = computed(() => cart.value.reduce((s, p) => s + p.price, 0).toFixed(2))

</script>

<template>
  <header class="site-header">
    <h1>Unsere Bäckerei</h1>
    <div class="cart">
      <span>🛒</span>
      <span v-if="cartCount">{{ cartCount }}</span>
    </div>
  </header>

  <main>
    <section class="products">
      <h2>Produkte</h2>
      <ul>
        <li v-for="p in store.products" :key="p.id">
          {{ p.name }} — {{ p.price }} - {{p.image}} CHF
          <button @click="addToCart(p)">In den Warenkorb</button>
        </li>
      </ul>
    </section>

    <aside class="warenkorb">
      <h2>Warenkorb</h2>
      <p v-if="cartCount === 0">Keine Artikel im Warenkorb.</p>
      <ul>
        <li v-for="(item, idx) in cart" :key="idx">
          {{ item.name }} — {{ item.price.toFixed(2) }} CHF
          <button @click="removeFromCart(idx)">Entfernen</button>
        </li>
      </ul>
      <p v-if="cartCount > 0">Gesamt: {{ cartTotal }} CHF</p>
    </aside>
  </main>
</template>

<style scoped>
.site-header { display:flex; justify-content:space-between; align-items:center; padding:1rem; }
.products { margin: 1rem 0; }
.warenkorb { border-left: 1px solid #ddd; padding-left:1rem; }
</style>
