function simpleInterest() {
  var principal = (document.getElementById("Principal1").value);
  var interestRate = (document.getElementById("Rate").value);
  interestRate = interestRate / 100;
  var termOfLoan = (document.getElementById("No of Years").value);
  var simpleInt = principal * interestRate * termOfLoan;
  document.getElementById("siOutput-01").innerHTML = "Interest: $" + simpleInt.toFixed(2);
}
        
