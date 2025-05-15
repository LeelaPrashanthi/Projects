// Clock Logic
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Input Validation
function isValidInput(num) {
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    alert("Please enter a valid positive integer.");
    return false;
  }
  return true;
}

// Iterative Factorial
function calculateIterative() {
  const num = parseInt(document.getElementById("numberInput").value);
  if (!isValidInput(num)) return;

  let result = 1;
  for (let i = 2; i <= num; i++) result *= i;

  displayResult(result, "Iterative");
}

// Recursive Factorial
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

function calculateRecursive() {
  const num = parseInt(document.getElementById("numberInput").value);
  if (!isValidInput(num)) return;

  const result = factorialRecursive(num);
  displayResult(result, "Recursive");
}

// Display Result
function displayResult(result, method) {
  document.getElementById("result").textContent = `Result (${method}): ${result}`;
}

