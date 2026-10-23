// ==========================================
// SPENDWISE BUDGET TRACKER - WEEK 6 SCRIPT
// ==========================================

// 1. DATA MODEL (Arrays & Objects)
let totalIncome = 0;
let totalBudget = 0;
let expenses = []; // Array to store multiple expense objects

// 2. DOM ELEMENT SELECTION
const budgetInput = document.getElementById('budget-input');
const setBudgetBtn = document.getElementById('set-budget-btn');

const expenseDescInput = document.getElementById('expense-desc');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategorySelect = document.getElementById('expense-category');
const addExpenseBtn = document.getElementById('add-expense-btn');

const totalBudgetDisplay = document.getElementById('total-budget-display');
const totalExpensesDisplay = document.getElementById('total-expenses-display');
const remainingBalanceDisplay = document.getElementById('remaining-balance-display');
const budgetStatusAlert = document.getElementById('budget-status-alert');
const expenseListTable = document.getElementById('expense-list-table');

// 3. EVENT LISTENERS
if (setBudgetBtn) {
  setBudgetBtn.addEventListener('click', handleSetBudget);
}

if (addExpenseBtn) {
  addExpenseBtn.addEventListener('click', handleAddExpense);
}

// 4. CORE FUNCTIONS

// Set Monthly Budget
function handleSetBudget(event) {
  event.preventDefault();
  const value = parseFloat(budgetInput.value);

  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid positive budget amount.");
    return;
  }

  totalBudget = value;
  budgetInput.value = '';
  updateDashboard();
}

// Add New Expense
function handleAddExpense(event) {
  event.preventDefault();
  
  const description = expenseDescInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);
  const category = expenseCategorySelect ? expenseCategorySelect.value : 'General';

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please fill in a valid expense description and positive amount.");
    return;
  }

  // Store record as an object in the expenses array
  const newExpense = {
    id: Date.now(),
    description: description,
    amount: amount,
    category: category,
    date: new Date().toLocaleDateString()
  };

  expenses.push(newExpense);

  // Clear input fields
  expenseDescInput.value = '';
  expenseAmountInput.value = '';

  updateDashboard();
}

// Process Data with Loops & Calculate Totals
function calculateTotalExpenses() {
  let total = 0;
  // Processing multiple array records with forEach loop
  expenses.forEach(expense => {
    total += expense.amount;
  });
  return total;
}

// Dynamic DOM Updates & Decision Making
function updateDashboard() {
  const totalExpenses = calculateTotalExpenses();
  const remainingBalance = totalBudget - totalExpenses;

  // Update Summary Cards in DOM
  if (totalBudgetDisplay) totalBudgetDisplay.textContent = `$${totalBudget.toFixed(2)}`;
  if (totalExpensesDisplay) totalExpensesDisplay.textContent = `$${totalExpenses.toFixed(2)}`;
  if (remainingBalanceDisplay) remainingBalanceDisplay.textContent = `$${remainingBalance.toFixed(2)}`;

  // Evaluate Budget Scenarios (Conditionals)
  if (budgetStatusAlert) {
    if (totalBudget === 0) {
      budgetStatusAlert.textContent = "Please set a monthly budget to begin tracking.";
      budgetStatusAlert.className = "alert-box info";
    } else if (remainingBalance < 0) {
      budgetStatusAlert.textContent = `Warning! You have exceeded your budget by $${Math.abs(remainingBalance).toFixed(2)}!`;
      budgetStatusAlert.className = "alert-box danger";
    } else if (remainingBalance <= totalBudget * 0.15) {
      budgetStatusAlert.textContent = "Caution: You are close to reaching your budget limit!";
      budgetStatusAlert.className = "alert-box warning";
    } else {
      budgetStatusAlert.textContent = "Your budget is in good standing.";
      budgetStatusAlert.className = "alert-box success";
    }
  }

  renderExpenseList();
}

// Render Expense Records into HTML Table
function renderExpenseList() {
  if (!expenseListTable) return;

  if (expenses.length === 0) {
    expenseListTable.innerHTML = `<tr><td colspan="4" style="text-align:center;">No expenses recorded yet.</td></tr>`;
    return;
  }

  let tableHTML = '';
  expenses.forEach((expense) => {
    tableHTML += `
      <tr>
        <td>${expense.description}</td>
        <td>${expense.category}</td>
        <td>$${expense.amount.toFixed(2)}</td>
        <td><button onclick="deleteExpense(${expense.id})" class="btn-delete">Delete</button></td>
      </tr>
    `;
  });

  expenseListTable.innerHTML = tableHTML;
}

// Delete Expense Function
function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  updateDashboard();
}

// Initial UI Render
updateDashboard();