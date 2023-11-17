/*
Filename: SophisticatedWebApp.js
Content: A Sophisticated Web Application that calculates the Fibonacci series and displays it in a fancy UI.
*/

// Fibonacci function
function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// UI Class
class UI {
  constructor() {
    this.container = document.querySelector('.container');
  }

  generateFibonacciSequence(num) {
    let fibonacciSequence = [];
    for (let i = 0; i <= num; i++) {
      const fibonacciNumber = fibonacci(i);
      fibonacciSequence.push(fibonacciNumber);
    }
    return fibonacciSequence;
  }

  displayFibonacciSequence(sequence) {
    sequence.forEach((num, index) => {
      const fibonacciNumber = document.createElement('div');
      fibonacciNumber.classList.add('fibonacci-number');
      fibonacciNumber.textContent = num;
      fibonacciNumber.style.animationDelay = `${(index + 1) * 0.1}s`;

      this.container.appendChild(fibonacciNumber);
    });
  }

  clearFibonacciSequence() {
    while (this.container.firstChild) {
      this.container.firstChild.remove();
    }
  }
}

// Main Function
function main() {
  const ui = new UI();
  const input = document.querySelector('#num-input');
  const btnGenerate = document.querySelector('#generate-btn');
  const btnClear = document.querySelector('#clear-btn');

  btnGenerate.addEventListener('click', () => {
    const num = parseInt(input.value);
    if (isNaN(num) || num < 0) {
      alert('Please enter a positive number.');
    } else {
      ui.clearFibonacciSequence();
      const fibonacciSequence = ui.generateFibonacciSequence(num);
      ui.displayFibonacciSequence(fibonacciSequence);
    }
  });

  btnClear.addEventListener('click', () => {
    ui.clearFibonacciSequence();
  });
}

// Initialize the application
main();