let total = 0;

function addExpense(){

let name = document.getElementById("name").value;
let amount = document.getElementById("amount").value;
let category = document.getElementById("category").value;

if(name=="" || amount==""){
alert("Enter details");
return;
}

let list = document.getElementById("list");

let li = document.createElement("li");
li.innerHTML = name + " - ₹" + amount + " ("+category+")";

list.appendChild(li);

total += parseInt(amount);

document.getElementById("total").innerText = total;

}