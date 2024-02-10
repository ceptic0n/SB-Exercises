window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");

  const monthlyPayment = document.getElementById("monthly-payment");

  const values = {
    amount : loanAmount.value,
    years : loanYears.value,
    rate : loanRate.value
  };

  updateMonthly(calculateMonthlyPayment(values));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let periodicIR = values.rate/12;
  let paymentTotal = values.years * 12;

  let monthlyPayment = (principle * periodicIR) / (1 - Math.pow(1 + periodicIR, -paymentTotal));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  if(monthlyPayment.innerText == "NaN"){
    monthlyPayment.innerText = " ";
  } else{
  monthlyPayment.innerText = monthly;
  }
}
