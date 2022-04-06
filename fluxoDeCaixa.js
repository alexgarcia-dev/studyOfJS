/*INCOME*/
let salary = 10000;
let rent = 900;
let freelance = 5000;
/*EXPENSES*/
let water = 80.32;
let electricity = 300.24;
let telephone = 50.99;
let internet = 120.9;
let creditCard = 3300.21;

let financialControl = {
  income: [salary, rent, freelance],
  expenses: [water, electricity, telephone, internet, creditCard]
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }
  return total;
}

function calculateMonthBalance() {
  let calculateIncomes = sum(financialControl.income);
  let calculateExpenses = sum(financialControl.expenses);

  let balance = calculateIncomes - calculateExpenses;

  if (balance >= 0) {
    console.log(`Seu saldo é positivo: R$ ${balance.toFixed(2)}`);
  } else {
    console.log(`Seu saldo é negativo: R$ ${balance.toFixed(2)}`);
  }
}

calculateMonthBalance();
