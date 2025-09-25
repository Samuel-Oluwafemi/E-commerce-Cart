const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById("cart-count");
let count = 0;
cart.forEach(item => {
    count += item.quantity;
})
cartCount.textContent = count;

const cartContainer = document.querySelector(".cart-container");

function renderCart(cart) {
    cartContainer.innerHTML = "";

    if(cart.length === 0) {
        cartContainer.textContent = "Your cart is empty";
        return;
    }   
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-items");

            const cart_img = document.createElement("img");
            cart_img.src = item.img;
            cart_img.classList.add("cart-img");
            cart_img.alt = item.name;

            const itemName = document.createElement("div");
            itemName.textContent = item.name;
            itemName.classList.add("item-name");

            const item_price = document.createElement("div");
            item_price.classList.add("item-price");
            item_price.textContent = `#${item.price}`;

            const controlsDiv = document.createElement("div");
            controlsDiv.classList.add("controls-div");
            controlsDiv.style.lineHeight = "6.5";

            const decreaseBtn = document.createElement("button");
            decreaseBtn.textContent = "-";
            decreaseBtn.classList.add("decrease-btn");
            // Attach data-id to buttons
            decreaseBtn.dataset.id = item.id;
            
            const quantitySpan = document.createElement("span");
            quantitySpan.textContent = item.quantity;
            console.log(quantitySpan);
            quantitySpan.classList.add("quantity-span");

            const increaseBtn = document.createElement("button");
            increaseBtn.classList.add("increase-btn");
            increaseBtn.textContent = "+";
            // Attach data-id to buttons
            increaseBtn.dataset.id = item.id;

            controlsDiv.appendChild(decreaseBtn);
            controlsDiv.appendChild(quantitySpan);
            controlsDiv.appendChild(increaseBtn);

            cartItem.appendChild(cart_img);
            cartItem.appendChild(itemName);
            cartItem.appendChild(item_price);
            cartItem.appendChild(controlsDiv);

            cartContainer.appendChild(cartItem);
            
            // Increase quantity
            increaseBtn.addEventListener('click', (e) => {
                // Target the specific id item
                const id = e.target.dataset.id;
                const product = cart.find(item => item.id === id);
                if(product) {
                    product.quantity +=1;
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                cartContainer.innerHTML = "";
                renderCart(cart);   
            })
            // Decrease quantity
            decreaseBtn.addEventListener('click', () => {
                // Target the specific id item
                const id = decreaseBtn.dataset.id;
                const product = cart.find(item => item.id === id);
                // Decrease quantity only if greater than 1
                if(product && product.quantity > 1) {
                    product.quantity -=1;
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(cart);
            })
        })
    }
renderCart(cart);