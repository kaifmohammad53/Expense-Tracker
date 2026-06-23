let amtEnter = document.querySelector("#amtEnter");
let desEnter = document.querySelector("#desEnter");

let incomebtn = document.querySelector("#income");
let expensebtn = document.querySelector("#expense");

let total = document.querySelector("#total");
let addIncome = document.querySelector("#addIncome");
let subExpense = document.querySelector("#subExpense");

function addHistory(color, sign) {
  // Both fields empty
  if (desEnter.value.trim() === "" && amtEnter.value.trim() === "") {
    alert("Majak Kar rha chutiye? sahi se likh");
    return false;
  }

  // Description entered but amount missing
  if (desEnter.value.trim() !== "" && amtEnter.value.trim() === "") {
    alert("paise bhi to batao chacha!");
    return false;
  }

  const newHistory = document.createElement("div");
  newHistory.classList.add("record");

  newHistory.innerHTML = `
        <p>${desEnter.value}</p>
        <p class="amt">${sign}${amtEnter.value}</p>
        <i class="fa-solid fa-trash"></i>
    `;

  let amt = newHistory.querySelector(".amt");
  amt.style.color = color;

  document.querySelector(".history").append(newHistory);

  return true;
}

// Income Button
incomebtn.addEventListener("click", () => {
  if (desEnter.value.trim() === "" && amtEnter.value.trim() !== "") {
    alert("kaha mila itna rupya");
    return;
  }

  if (!addHistory("green", "+")) {
    return;
  }

  total.innerText = parseFloat(total.innerText) + parseFloat(amtEnter.value);

  addIncome.innerText =
    parseFloat(addIncome.innerText) + parseFloat(amtEnter.value);

  desEnter.value = "";
  amtEnter.value = "";
});

// Expense Button
expensebtn.addEventListener("click", () => {
  if (desEnter.value.trim() === "" && amtEnter.value.trim() !== "") {
    alert("kaha udaye ho itana paisa");
    return;
  }

  if (!addHistory("red", "-")) {
    return;
  }

  total.innerText = parseFloat(total.innerText) - parseFloat(amtEnter.value);

  subExpense.innerText =
    parseFloat(subExpense.innerText) + parseFloat(amtEnter.value);

  desEnter.value = "";
  amtEnter.value = "";
});
