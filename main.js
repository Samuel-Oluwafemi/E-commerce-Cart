const cartCount = document.getElementById("cart-count");
const mainBtn = document.querySelector(".main-btn");
const cartBtn = document.querySelectorAll("#cart-btn");
const closeBtn = document.getElementById("close-btn");

//Retrieve modal from main btn
mainBtn.addEventListener('click', () => {
    document.getElementById("modal").style.display = "block";
})
// Store clicked products in a cart array
let cart = [];
// Initialize cart count
let count = 0;

cartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        alert("Cart successfully updated");
        
        const product = {
            name: btn.dataset.name,
            price: btn.dataset.price,
            img: btn.dataset.img,
            id: btn.dataset.id, 
            quantity: 1
        }
        // Check if product already exists in cart
        const existing = cart.find(item => item.name === product.name);
        // if product exists, increase quantity
        if(existing) {
            existing.quantity +=1;
            const itExists = existing.quantity;
            alert(`This item is already in your cart. Quantity increased by ${itExists}`);
            // else add new product to cart
        } else {
        cart.push(product);
        }
        console.log(cart);
        localStorage.setItem('cart', JSON.stringify(cart)) || [];
    })
})