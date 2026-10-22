console.log("Spendwise JavaScript is connected!");

// --- Step 2: Store Application Data ---
const monthlyBudget = 2500.00;
let totalExpenses = 450.00;
let remainingBalance = monthlyBudget - totalExpenses;

// Category-specific budgets and spending
const categories = [
  { name: "Housing", budget: 1000.00, spent: 1000.00 },
  { name: "Food", budget: 600.00, spent: 450.00 },
  { name: "Transport", budget: 300.00, spent: 200.00 },
  { name: "Utilities", budget: 200.00, spent: 150.00 },
  { name: "Entertainment", budget: 150.00, spent: 80.00 },
  { name: "Savings", budget: 250.00, spent: 250.00 }
];

// Log initial data to verify in console
console.log("Monthly Budget:", monthlyBudget);
console.log("Total Expenses:", totalExpenses);
console.log("Remaining Balance:", remainingBalance);

// --- Step 3: Collect User Input ---
let userExpenseInput = prompt("Enter a new expense amount for SpendWise:");
let parsedExpense = parseFloat(userExpenseInput);

console.log("Raw User Input:", userExpenseInput);
console.log("Parsed Expense Number:", parsedExpense);

// --- Step 4: Perform Budget Calculations ---
// Add the parsed expense to total expenses
let updatedTotalExpenses = totalExpenses + parsedExpense;

// Recalculate the remaining balance
let updatedRemainingBalance = monthlyBudget - updatedTotalExpenses;

console.log("Updated Total Expenses:", updatedTotalExpenses);
console.log("Updated Remaining Balance:", updatedRemainingBalance);

// --- Step 5: Create Reusable Functions ---
function calculateBudgetStatus(budget, totalSpent) {
  const remaining = budget - totalSpent;
  if (remaining < 0) {
    return `Warning: Budget exceeded by $${Math.abs(remaining).toFixed(2)}`;
  } else {
    return `Status Normal - Remaining Balance: $${remaining.toFixed(2)}`;
  }
}

// Test the reusable function
const finalStatusMessage = calculateBudgetStatus(monthlyBudget, updatedTotalExpenses);
console.log("Function Output:", finalStatusMessage);