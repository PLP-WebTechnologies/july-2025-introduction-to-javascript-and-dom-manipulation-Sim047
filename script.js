// ------------------------------
// Part 1: Variables & Conditionals
// ------------------------------

// Get DOM elements for Part 1
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
  const age = Number(ageInput.value);

  // Conditional logic to determine age category
  if (isNaN(age) || age < 0) {
    ageResult.textContent = 'Please enter a valid non-negative number.';
  } else if (age < 13) {
    ageResult.textContent = 'You are a child.';
  } else if (age < 20) {
    ageResult.textContent = 'You are a teenager.';
  } else if (age < 65) {
    ageResult.textContent = 'You are an adult.';
  } else {
    ageResult.textContent = 'You are a senior.';
  }
});


// ------------------------------
// Part 2: Functions
// ------------------------------

// DOM elements for Part 2
const greetBtn = document.getElementById('greetBtn');
const greetResult = document.getElementById('greetResult');
const calcBtn = document.getElementById('calcBtn');
const calcResult = document.getElementById('calcResult');

/**
 * Custom function to greet the user
 * @param {string} name - user name
 * @returns {string} greeting message
 */
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript Fundamentals.`;
}

/**
 * Custom function to calculate total price with tax
 * @param {number} price - item price
 * @param {number} quantity - number of items
 * @param {number} taxRate - tax rate as decimal (e.g. 0.08)
 * @returns {number} total price including tax
 */
function calculateTotal(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const taxAmount = subtotal * taxRate;
  return subtotal + taxAmount;
}

greetBtn.addEventListener('click', () => {
  // Hard-coded name for demo
  const message = greetUser('Developer');
  greetResult.textContent = message;
});

calcBtn.addEventListener('click', () => {
  // Example values for price, quantity, tax rate
  const total = calculateTotal(29.99, 3, 0.07);
  calcResult.textContent = `Total price (including tax): $${total.toFixed(2)}`;
});


// ------------------------------
// Part 3: Loops
// ------------------------------

// DOM elements for Part 3
const showColorsBtn = document.getElementById('showColorsBtn');
const colorsList = document.getElementById('colorsList');
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

// Loop example 1: forEach to display colors in a list
showColorsBtn.addEventListener('click', () => {
  // Clear previous list
  colorsList.innerHTML = '';

  colors.forEach(color => {
    const li = document.createElement('li');
    li.textContent = color;
    colorsList.appendChild(li);
  });
});

// Loop example 2: countdown using for loop and setTimeout
countdownBtn.addEventListener('click', () => {
  countdownDisplay.textContent = 'Countdown starting...';

  // Clear any previous timeouts to avoid overlap
  let timeoutIDs = [];

  for (let i = 10; i >= 0; i--) {
    const id = setTimeout(() => {
      countdownDisplay.textContent = i === 0 ? "🎉 Time's up!" : `Countdown: ${i}`;
    }, (10 - i) * 1000);
    timeoutIDs.push(id);
  }
});


// ------------------------------
// Part 4: DOM Manipulation
// ------------------------------

// DOM elements for Part 4
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const clickCountP = document.getElementById('clickCount');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

let clickCount = 0;

// Interaction 1: Toggle dark theme class on body
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Interaction 2: Count and display number of times the button is clicked
toggleThemeBtn.addEventListener('click', () => {
  clickCount++;
  clickCountP.textContent = `Button clicked ${clickCount} ${clickCount === 1 ? 'time' : 'times'}`;
});

// Interaction 3: Add new list item dynamically on button click
addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `New Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(newItem);
});
