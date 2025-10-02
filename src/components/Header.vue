<template>
  <header class="header">
    <div class="logo">
      <h1>ShopName</h1>
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Produkte</a></li>
        <li><a href="#">Über uns</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
    <div class="cart">
      <a href="#">
        🛒 <span class="cart-count">3</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

.logo h1 {
  margin: 0;
  color: #333;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin: 0 1rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav a:hover {
  color: #ff6600;
}

.cart a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  position: relative;
}

.cart-count {
  background-color: #ff6600;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  position: absolute;
  top: -8px;
  right: -10px;
}
</style>
