// const { createElement } = require("react");

let amtEnter=document.querySelector("#amtEnter");
let desEnter=document.querySelector("#desEnter");
let incomebtn=document.querySelector("#income");
let expensebtn=document.querySelector("#expense");
let total =document.querySelector("#total");
let addIncomre=document.querySelector("#addIncome");
let subExpense=document.querySelector("#subExpense");
// let amt=document.querySelector(".amt")
// let trsHistory= document.querySelector(".trsHistory");

let addHistory=(color)=>{
    const newHistory=document.createElement("div");
    newHistory.classList.add("record");
    newHistory.innerHTML = `
        <p>${desEnter.value}</p>
        <p class="amt">+${amtEnter.value}</p>
        <i class="fa-solid fa-trash"></i>`;
    document.querySelector(".history").append(newHistory);
    let amt=newHistory.querySelector(".amt");
    amt.style.color=color;
}
incomebtn.addEventListener("click",()=>{
    addHistory("green");

});
expensebtn.addEventListener("click", () => {
  addHistory("red");
});
