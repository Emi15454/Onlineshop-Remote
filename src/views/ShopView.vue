<script setup>
import { computed, onMounted, ref } from 'vue'
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


const isClicked = ref(false);

function handleClick() {
  isClicked.value = true;

  // Optional: nach 1 Sekunde wieder zurücksetzen
  setTimeout(() => {
    isClicked.value = false;
  }, 1000);
}
const filterProducts = ref('');


const filteredProductsBySearch = computed(() =>
  filterProducts.value != ''
    ? store.products.filter(product => product == filterProducts.value || product.name.toLowerCase().includes(filterProducts.value.toLowerCase()))
    : store.products
);
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
      <textarea v-model="filterProducts" placeholder="Suche nach Produktname..."></textarea>
      <div class="product-grid">
        <div v-for="product in filteredProductsBySearch" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.alt" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ product.price.toFixed(2) }} CHF</p>
          <button :class="{ clicked: isClicked }" @click="addToCart(product), handleClick(product)">
            {{ isClicked ? "Hinzugefügt!" : "In den Warenkorb" }}
          </button>
        </div>
      </div>
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
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.products {
  margin: 1rem 0;
}

.warenkorb {
  border-left: 1px solid #ddd;
  padding-left: 1rem;
}

.product-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-inline: 10%;
}

.product-card {
  width: 100%;
  border: 1px solid #ddd;
  padding: 1rem;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

button.clicked {
  background-color: #38c172;
  /* grün wenn geklickt */
}
</style>
