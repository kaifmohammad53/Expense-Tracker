let amtEnter = document.querySelector("#amtEnter");
let desEnter = document.querySelector("#desEnter");

let incomebtn = document.querySelector("#income");
let expensebtn = document.querySelector("#expense");

let total = document.querySelector("#total");
let addIncome = document.querySelector("#addIncome");
let subExpense = document.querySelector("#subExpense");

let saveTask = () => {
  localStorage.setItem("history",
     document.querySelector(".history").innerHTML);

  localStorage.setItem("account",
     document.querySelector(".account").innerHTML);
};
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
        <i class="fa-solid fa-trash trash"></i>
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
  saveTask();
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
  saveTask();
});
const clearBtn = document.querySelector("#clear");
const history = document.querySelector(".history");

clearBtn.addEventListener("click", () => {
  history.innerHTML = "";
  saveTask();
});
document.querySelector(".history").addEventListener("click",(e)=>{
  if(e.target.classList.contains("trash")){
    e.target.parentElement.remove();

  }
  let record = e.target.parentElement;
  let amountText = record.querySelector(".amt").innerText;
  if(amountText.includes("+")){
    total.innerText =parseFloat(total.innerText)-parseFloat(amountText);
    addIncome.innerText =
      parseFloat(addIncome.innerText)-parseFloat(amountText);
  }
  saveTask();
});
let loadTask=()=>{
  let historyData = localStorage.getItem("history");
  let accountData = localStorage.getItem("account");
  if (historyData) {
    document.querySelector(".history").innerHTML = historyData;
  }

  if (accountData) {
    document.querySelector(".account").innerHTML = accountData;
  }
}
// loadTask();
