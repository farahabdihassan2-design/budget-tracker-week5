# SpendWise — Personal Budget Tracker

A responsive, interactive financial tracking application 
developed as part of the Power Learn Project (PLP) 
Software Engineering training program under the 
PLP*ILO initiative.

---

## Project Overview

The SpendWise Budget Tracker transforms static financial 
monitoring into a dynamic client-side application. 
The project enables users to track monthly spending, 
evaluate category-specific expenditures, process real-time 
expense inputs, and automatically recalculate available 
balances using JavaScript logic.

---

## JavaScript Concepts Implemented

### 1. Variables & Data Types
- **Variables (`const` & `let`):** Used `const` for 
  fixed configurations (such as monthly budget limits) 
  and `let` for values that change (such as total 
  expenses and remaining balance).
- **Data Structures:** Utilized primitives (`Numbers`, 
  `Strings`, `Booleans`) alongside complex structures 
  (`Objects` and `Arrays`) to model expense categories.

### 2. User Input Handling
- **Prompt Collection:** Used `prompt()` to capture 
  real-time expense inputs from the user.
- **Type Conversion:** Used `parseFloat()` to convert 
  string inputs into calculable numbers.

### 3. Arithmetic & Budget Calculations
- Automated key operations:
  - Expense Accumulation:
    `updatedTotalExpenses = totalExpenses + parsedExpense`
  - Balance Evaluation:
    `updatedRemainingBalance = monthlyBudget - updatedTotalExpenses`

### 4. Modular & Reusable Functions
- **Function Encapsulation:** Implemented 
  `calculateBudgetStatus(budget, totalSpent)` to 
  centralize logic.
- **Conditional Logic:** Evaluates balance states using 
  `if...else` statements to return clear status alerts.

---

## File Structure & Architecture

- `index.html` — Semantic HTML5 layout and script element link
- `style.css` — CSS Grid & Flexbox styling rules
- `script.js` — JavaScript logic, calculations, and functions
- `README.md` — Comprehensive project documentation

---

## How to Test the Application

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. When prompted, enter a numerical expense amount.
4. Open the Developer Console (**F12** -> **Console** tab) 
   to inspect calculated totals and function outputs.

---

## Author & Acknowledgments

- **Developer:** Hassan Abdi Farah
- **Program:** PLP*ILO Software Engineering Training Program
- **Cohort:** Garissa Hub / PLP-ILO-2601-1320