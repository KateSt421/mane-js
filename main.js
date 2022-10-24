const catalog = {
    products: [
        { name: "Яблоки", price: 100, count: 1 },
        { name: "Груши", price: 200, count: 2 },
        { name: "Бананы", price: 50, count: 3 },
    ],
    renderCatalog() {
        const catalogBody = document.querySelector(".catalog");
        this.products.forEach(product => {
            catalogBody.insertAdjacentHTML("afterbegin", `
        <div class="product-card">
            <h2 class="catalog__product-heading">${product.name}</h2>
            <span class="catalog__product-price">${product.price}</span>
            <span class=product-price>рублей</span>
            <button class="button">Добавить в корзину</button>
        </div> 
    `);
        });
    },
    getProduct(event) {
        if (event.target.classList.contains("button")) {
            catalog.products.forEach(product => {
                if (product.name == event.target.parentElement.children[0].textContent) {
                    cart.pushCartProduct(product);
                }
            })
        }
    },
};
catalog.renderCatalog();
cart.renderCart();

document.querySelector(".catalog").addEventListener("click", event => {
    catalog.getProduct(event);
    cart.getPriceBasket();
})