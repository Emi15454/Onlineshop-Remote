<script setup>
    import { defineStore } from "pinia";

</script>

<template>
<head>
    <meta charset="UTF-8">
    <title>Online-Shop</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="banner">
    <p>🍫 Willkommen bei unserem Online-Shop - Jetzt neue Produkte entdecken!</p>
    </div>
    <h1>Willkommen im Online-Shop!</h1>
    <!-- Warenkorb-Symbol mit Badge -->
    <div id="cartIcon" onclick="scrollToCart()">
        <span style="font-size:2em;">🛒</span>
        <span id="cartBadge">0</span>
        <div style="font-size:0.9em;">Warenkorb</div>
    </div>
    <div id="produkte">
        
    </div>
    <div class="warenkorb" id="warenkorb-section">
        <h2>Warenkorb</h2>
        <ul id="warenkorbListe"></ul>
        <p id="gesamt">Keine Artikel im Warenkorb.</p>
    </div>

    <footer>
        <div class="footer-container">
            <div class="footer-section">
            <h3>Kontakt</h3>
            <p>📞 +41 76 725 04 12</p>
            <p> <a href="Main.html">info@Mehl-ionäre.ch</a></p>
            <p> <a href="Main.html">www.Mehl-ionäre.ch</a></p>
            </div>
            <div class="footer-section">
            <h3>Social Media</h3>
            <p><a href="Main.html">Instagram</a></p>
            <p><a href="Main.html">TikTok</a></p>
            <p><a href="Main.html">Youtube</a></p>
            <p><a href="Main.html">Facebook</a></p>
            <p>@Mehl-ionäre</p>
            </div>
            <div class="footer-section">
            <h3>Rechtliches</h3>
            <p><a href="#">AGB</a></p>
            <p><a href="#">Datenschutzerklärung</a></p>
            <p><a href="#">Versandkosten & Zahlungsinformationen</a></p>
            <p><a href="#">Widerrufsbelehrung & Widerrufsformular</a></p>
            <p><a href="#">Impressum</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© Mehl-ionäre – Missbrauch melden</p>
            <p>Betrieben von Nicolas, Noam und Emilijan</p>
        </div>
    </footer>
 </body>
</template>
    <script>
        const warenkorb = [];

        function addToCart(name, preis) {
            warenkorb.push({name, preis});
            updateCart();
        }
        function removeFromCart(index) {
            warenkorb.splice(index, 1);
            updateCart();
        }
        function updateCart() {
            const liste = document.getElementById('warenkorbListe');
            const gesamt = document.getElementById('gesamt');
            const badge = document.getElementById('cartBadge');
            liste.innerHTML = '';
            let summe = 0;
            if (warenkorb.length === 0) {
                gesamt.textContent = 'Keine Artikel im Warenkorb.';
                badge.style.display = 'none';
            } else {
                warenkorb.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.textContent = item.name + ' - ' + item.preis.toFixed(2) + ' CHF ';
                    const btn = document.createElement('button');
                    btn.textContent = 'Entfernen';
                    btn.onclick = () => removeFromCart(index);
                    li.appendChild(btn);
                    liste.appendChild(li);
                    summe += item.preis;
                });
                gesamt.textContent = 'Gesamt: ' + summe.toFixed(2) + ' CHF ';
                badge.textContent = warenkorb.length;
                badge.style.display = 'inline';
            }
        }
    
    export const useProductStore = defineStore("products", {
      state: () => ({
        products: []
      }),
      actions: {
        async loadProducts() {
          const res = await fetch("../products.json");
          this.products = await res.json();  // hier wird die Liste im Store gespeichert
        }
      }
    });

</script>