// Selecting DOM Elements
const counterEl = document.getElementById("counter");
const increateBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

// Increase
increateBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

// Decrease
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

// Update UI
function updateCounter() {
  counterEl.textContent = count;

  // Disable decrease button when count is 0
  decreaseBtn.disabled = count === 0;
}
