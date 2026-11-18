let cupAmt;
document.getElementById("mySubmit").onclick = function() {
  cupAmt = document.getElementById("myCupAmt").value;
  document.getElementById("myPrice").textContent = `Price of the cup is ${cupAmt}`;
}