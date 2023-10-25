/**
 * Filename: sophisticated_code.js
 * 
 * Description: A sophisticated and complex JavaScript code that showcases various advanced concepts and techniques.
 *              This code implements a scalable e-commerce shopping cart system.
 */ 

class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].price;
    }
    return totalPrice;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  checkout() {
    // Simulate the checkout process
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve("Checkout was successful!");
        } else {
          reject("An error occurred during checkout!");
        }
      }, 2000);
    });
  }
}

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    // Simulate logging in
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve("Logged in successfully!");
        } else {
          reject("Login failed!");
        }
      }, 1000);
    });
  }

  logout() {
    // Simulate logging out
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Logged out successfully!");
      }, 500);
    });
  }
}

// Usage example
const user = new User("John Smith", "john@example.com");
const cart = new ShoppingCart();

user.login()
  .then((message) => {
    console.log(message);
    const product1 = new Product(1, "Product 1", 19.99, "This is the first product");
    const product2 = new Product(2, "Product 2", 29.99, "This is the second product");
    const product3 = new Product(3, "Product 3", 9.99, "This is the third product");

    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.addProduct(product3);

    console.log(`Total price: ${cart.getTotalPrice()}`);
    console.log("Removing product 2...");
    cart.removeProduct(2);
    console.log(`Total price after removal: ${cart.getTotalPrice()}`);

    cart.checkout()
      .then((message) => {
        console.log(message);
        user.logout()
          .then((message) => {
            console.log(message);
          });
      })
      .catch((errorMessage) => {
        console.log(`Checkout error: ${errorMessage}`);
      });
  })
  .catch((errorMessage) => {
    console.log(`Login error: ${errorMessage}`);
  });

/**
 * Output:
 * 
 * Logged in successfully!
 * Total price: 59.97
 * Removing product 2...
 * Total price after removal: 29.98
 * Checkout was successful!
 * Logged out successfully!
 */