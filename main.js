const cartCount = document.getElementById("cart-count");
const mainBtn = document.querySelector(".main-btn");
const cartBtn = document.querySelectorAll("#cart-btn");
const content = document.querySelector(".content");
const gridContainer = document.querySelector(".grid-container");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");

//Retrieve modal from main btn
mainBtn.addEventListener('click', () => {
    modal.style.display = "block";
    gridContainer.style.display = "none";
    document.querySelector(".header").style.display = "none";
    document.querySelector(".footer").style.display = "none";
})

//Close modal 
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
    gridContainer.style.display = "grid";
    document.querySelector(".header").style.display = "flex";
    document.querySelector(".footer").style.display = "block";
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