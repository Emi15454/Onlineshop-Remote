<script setup>

import vue from vue.js


</script>

<template>
<head>
    <meta charset="UTF-8">
    <title>Online-Shop</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="banner">
    <p>🍫 Willkommen bei unserem Online-Shop – Jetzt neue Produkte entdecken!</p>
    </div>
    <h1>Willkommen im Online-Shop!</h1>
    <!-- Warenkorb-Symbol mit Badge -->
    <div id="cartIcon" onclick="scrollToCart()">
        <span style="font-size:2em;">🛒</span>
        <span id="cartBadge">0</span>
        <div style="font-size:0.9em;">Warenkorb</div>
    </div>
    <div id="produkte">
        <div class="produkt"> 
            <img src="images1/Couture1.png" alt="Couture1"> 
            <h2>Couture1</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture1', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture2.png" alt="Couture2"> 
            <h2>Couture2</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture2', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture3.png" alt="Couture3"> 
            <h2>Couture3</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture3', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture4.png" alt="Couture4"> 
            <h2>Couture4</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture4', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture5.png" alt="Couture5"> 
            <h2>Couture5</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture5', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture6.png" alt="Couture6"> 
            <h2>Couture6</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture6', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture7.png" alt="Couture7"> 
            <h2>Couture7</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture7', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture8.png" alt="Couture8"> 
            <h2>Couture8</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture8', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture9.png" alt="Couture9"> 
            <h2>Couture9</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture9', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture10.png" alt="Couture10"> 
            <h2>Couture10</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture10', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture11.png" alt="Couture11"> 
            <h2>Couture11</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture11', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture12.png" alt="Couture12"> 
            <h2>Couture12</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture12', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture13.png" alt="Couture13"> 
            <h2>Couture13</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture13', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture14.png" alt="Couture14"> 
            <h2>Couture14</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture14', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture15.png" alt="Couture15"> 
            <h2>Couture15</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture15', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt"> 
            <img src="images1/Couture16.jpeg" alt="Couture16"> 
            <h2>Couture16</h2> 
            <p>5.50</p> 
            <button onclick="addToCart('Couture16', 5.50)">In den Warenkorb</button> 
        </div>
        <div class="produkt">
            <img src="images1/Cookie1.jpg" alt="Cookie1">
            <h2>Schoko Keks</h2>
            <p> 2.50</p>
            <button onclick="addToCart('Schoko Keks', 2.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images1/Cookie2.jpg" alt="Cookie2">
            <h2>Cookie</h2>
            <p> 2.50</p>
            <button onclick="addToCart('Cookie', 2.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images1/Schokospitz1.jpg" alt="Schokospitz1">
            <h2>Schokospitz</h2>
            <p> 2.50</p>
            <button onclick="addToCart('Schokospitz', 2.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images1/Cookie4.jpg" alt="Cookie4">
            <h2>Produkt4</h2>
            <p> 2.50</p>
            <button onclick="addToCart('Produkt4', 2.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images1/Cookie5.jpg" alt="Cookie5">
            <h2>Produkt5</h2>
            <p> 2.50</p>
            <button onclick="addToCart('Produkt5', 2.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images1/Apfeltasche1.jpg" alt="Apfeltasche1">
            <h2>Apfeltasche</h2>
            <p> 4.20</p>
            <button onclick="addToCart('Apfeltasche', 4.20)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images1/Brownie1.jpg" alt="Brownie1">
            <h2>Brownie</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Brownie', 3.50)">In den Warenkorb</button>
        </div>
                <div class="produkt">
            <img src="images1/Butterbrezel1.jpg" alt="Butterbrezel1">
            <h2>Butterbrezel</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Butterbrezel', 3.50)">In den Warenkorb</button>
        </div>
                <div class="produkt">
            <img src="images1/Weggli1.png" alt="Weggli1">
            <h2>Weggli</h2>
            <p> 0.90</p>
            <button onclick="addToCart('Weggli', 0.90)">In den Warenkorb</button>
        </div>
                <div class="produkt">
            <img src="images1/Laugenbrezel1.jpg" alt="Laugenbrezel1">
            <h2>Laugenbrezel</h2>
            <p> 2.90</p>
            <button onclick="addToCart('Laugenbrezel', 2.90)">In den Warenkorb</button>
        </div>
                <div class="produkt">
            <img src="images1/Semmel1.jpg" alt="Semmel1">
            <h2>Semmel</h2>
            <p> 0.90</p>
            <button onclick="addToCart('Semmel', 0.90)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images2/Eier1.webp" alt="Eier1">
            <h2>Eier</h2>
            <p> 3.60</p>
            <button onclick="addToCart('Eier', 3.60)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images2/Hefe1.jpg" alt="Hefe1">
            <h2>Hefe</h2>
            <p> 1.50</p>
            <button onclick="addToCart('Hefe', 1.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images2/Mehl1.jpg" alt="Mehl1">
            <h2>Mehl</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Mehl', 3.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images2/Milch1.png" alt="Milch1">
            <h2>Milch</h2>
            <p> 2.50</p>
            <button onclick="addToCart('Milch', 2.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images3/Redbull1.jpg" alt="Redbull1">
            <h2>Redbull</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Redbull', 3.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images3/Comella1.png" alt="Comella1">
            <h2>Choco Drink</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Choco Drink', 3.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images3/Emmi1.png" alt="Emmi1">
            <h2>Macchiato</h2>
            <p>3.50</p>
            <button onclick="addToCart('Macchiato', 3.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images3/Emmi2.png" alt="Emmi2">
            <h2>Macchiato</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Plant Based, Macchiato', 3.50)">In den Warenkorb</button>
        </div>
        <div class="produkt">
            <img src="images3/Emmi3.png" alt="Emmi3">
            <h2>Espresso</h2>
            <p> 3.50</p>
            <button onclick="addToCart('Espresso', 3.50)">In den Warenkorb</button>
        </div>
    </div>
    <div class="warenkorb" id="warenkorb-section">
        <h2>Warenkorb</h2>
        <ul id="warenkorbListe"></ul>
        <p id="gesamt">Keine Artikel im Warenkorb.</p>
    </div>
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
        function scrollToCart() {
            document.getElementById('warenkorb-section').scrollIntoView({behavior: 'smooth'});
                    }
    </script>
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