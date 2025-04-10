const checkBtn = document.getElementById("check-btn");
const results = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else if (phoneRegex.test(userInput.value)){
    results.textContent = `Valid US number: ${userInput.value}`;
  } else {
    results.textContent = `Invalid US number: ${userInput.value}`;
  }
});

clearBtn.addEventListener("click", () => {
  results.textContent = "";
  userInput.value = '';
});
