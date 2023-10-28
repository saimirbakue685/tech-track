/* complex_code.js */

// This code demonstrates a complex implementation of a shopping cart system in JavaScript

// Define product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Define cart class
class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    // Add a product to the cart
    addItem(product, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.items.push(product);
            this.total += product.price;
        }
    }

    // Remove a product from the cart
    removeItem(product, quantity) {
        let count = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === product.name && count < quantity) {
                this.items.splice(i, 1);
                this.total -= product.price;
                count++;
                i--;
            }
        }
    }

    // Get the number of items in the cart
    getItemCount() {
        return this.items.length;
    }

    // Get the total price of the items in the cart
    getTotalPrice() {
        return this.total;
    }

    // Clear the cart
    clear() {
        this.items = [];
        this.total = 0;
    }
}

// Create some products
const product1 = new Product('Product 1', 10);
const product2 = new Product('Product 2', 20);
const product3 = new Product('Product 3', 30);

// Create a shopping cart
const cart = new Cart();

// Add products to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 3);

// Output cart information
console.log(`Total items in cart: ${cart.getItemCount()}`);
console.log(`Total price of items in cart: $${cart.getTotalPrice()}`);

// Remove some products from the cart
cart.removeItem(product3, 1);
cart.removeItem(product1, 1);

// Output updated cart information
console.log(`Total items in cart: ${cart.getItemCount()}`);
console.log(`Total price of items in cart: $${cart.getTotalPrice()}`);

// Clear the cart
cart.clear();

// Output final cart information
console.log(`Total items in cart: ${cart.getItemCount()}`);
console.log(`Total price of items in cart: $${cart.getTotalPrice()}`);

// More complex scenarios and features can be added to this code to make it even more elaborate and sophisticated.