// Get the input elements
const amountInput = document.getElementById('amount');
const tipPercentageInput = document.getElementById('tipPercentage');
const peopleInput = document.getElementById('people');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Get the result elements
const finalResult = document.getElementById('final');
const tipAmountResult = document.getElementById('tipAmount');
const totalAmountResult = document.getElementById('totalAmount');

// Initialize people count to 1
let peopleCount = 1;

// Update people count when increment or decrement buttons are clicked
incrementButton.addEventListener('click', () => {
  peopleCount++;
  peopleInput.value = peopleCount;
});

decrementButton.addEventListener('click', () => {
  if (peopleCount > 1) {
    peopleCount--;
    peopleInput.value = peopleCount;
  }
});

// Calculate the bill when the calculate button is clicked
function calculateBill() {
  const amount = parseFloat(amountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const totalAmount = amount + (amount * tipPercentage);
  const splitAmount = totalAmount / peopleCount;

  // Update the result elements
  finalResult.textContent = `Split Bill: $${splitAmount.toFixed(2)} per person`;
  tipAmountResult.textContent = `Tip Amount: $${(amount * tipPercentage).toFixed(2)}`;
  totalAmountResult.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
}