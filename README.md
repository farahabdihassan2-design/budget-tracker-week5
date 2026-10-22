# SpendWise Dashboard Shell

A responsive, modern financial dashboard shell built as part of the 
Power Learn Project (PLP) Software Engineering training program under 
the **PLP*ILO** initiative.

## Overview
The SpendWise Dashboard Shell serves as the visual foundation for a 
capstone budget tracker application. The focus of this project is 
structuring a clean user interface using modern CSS layout techniques 
(CSS Grid and Flexbox), CSS custom properties (variables), and 
responsive design principles without relying on absolute positioning.

## Structure & Architecture

### 1. `index.html`
- **Sidebar (`<aside>`):** Navigation menu structured using semantic 
  lists and flexible navigation items.
- **Header (`<header>`):** Top bar displaying dashboard title and user 
  profile information.
- **Category Cards (`<section class="cards-section">`):** Six realistic 
  financial expense category cards showing static budget amounts and 
  statuses.
- **Recent Expenses Table (`<section class="recent-expenses-section">`):** 
  Structured table displaying recent transactions with alternating row 
  styling.
- **Multimedia Content (`<section class="video-section">`):** Responsive 
  iframe container hosting educational budgeting tips.
- **Footer (`<footer>`):** Copyright and author attribution.

### 2. `style.css`
- **CSS Custom Properties (`:root`):** Standardized color palette and 
  font typography variables (`--brand-color`, `--accent-color`, etc.).
- **CSS Grid Layout:** Defines overall page architecture using 
  `.dashboard-container` and responsive card distribution via 
  `.cards-grid`.
- **Flexbox Positioning:** Controls internal alignment for sidebar items, 
  header components, and individual category cards.
- **Micro-interactions:** Interactive hover and focus animations on 
  cards with a transition duration under 250ms 
  (`transform: translateY(-4px)`).
- **Responsive Media Query:** Automatically collapses the layout into a 
  mobile-friendly single column at viewports below 768px 
  (`@media (max-width: 768px)`).
- **Dark Theme Support:** Incorporates `@media (prefers-color-scheme: dark)` 
  to adapt theme colors according to system preferences.

## Author & Program
- **Name:** Hassan Abdi Farah
- **Program:** Power Learn Project (PLP) - PLP*ILO Software Engineering Cohort
