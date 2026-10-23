# SpendWise - Interactive Budget Tracker (Week 6)

## Overview
SpendWise is an interactive budgeting and financial tracking web application built with HTML, CSS, and JavaScript. For the Week 6 assignment, the application was upgraded from static templates to a fully dynamic, event-driven web application featuring real-time data handling, decision-making, and DOM updates.

## Key Improvements Made This Week
* **Dynamic Control Panel:** Added interactive input forms enabling users to set monthly budgets and record new expenses with categories and descriptions.
* **Data Model & Arrays:** Replaced hardcoded static items with a dynamic JavaScript array of objects (`expenses`) to manage multiple records efficiently.
* **Automated Calculations:** Implemented loop-based processing to calculate total expenditures dynamically.
* **Interactive UI & Feedback:** Added event listeners and conditional logic to evaluate financial health and update summary cards and alert banners in real time.

## Technical Implementation Highlights

### 1. Conditionals (Decision Making)
Conditional statements (`if`, `else if`, `else`) are used inside `updateDashboard()` to evaluate the user's remaining balance against their budget. The application triggers visual warnings if the budget is exceeded or running low.

### 2. Arrays for Data Storage
An array (`let expenses = []`) stores multiple expense objects. Each object contains unique properties (`id`, `description`, `amount`, `category`, and `date`).

### 3. Loops for Data Processing
JavaScript `forEach` loops iterate over the `expenses` array to calculate total spending and dynamically generate table rows for the user interface.

### 4. DOM Manipulation
Native DOM methods (`document.getElementById`, `.textContent`, `.innerHTML`) are used to read user input values, update financial summary display cards, and render dynamic tables directly on the webpage without relying on the console.

### 5. Event Handling
`addEventListener` is attached to buttons (`Set Budget`, `Add Expense`) to capture user actions (`click` events) and trigger reactive JavaScript functions instantly.

## Challenges Encountered & Resolutions
* **Challenge:** Ensuring input validation handled empty or negative numbers properly without breaking calculations.
* **Resolution:** Implemented explicit validation checks (`isNaN`, `value <= 0`) using `alert()` dialogs to guide the user toward valid entries before updating the data model.