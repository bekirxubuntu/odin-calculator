# Calculator — The Odin Project

An interactive browser-based calculator built using HTML5, CSS3, and Vanilla JavaScript as part of The Odin Project Foundations curriculum.

---

## About The Project

This project is an implementation of an on-screen calculator built from scratch. The primary goal was to combine fundamental web development skills—HTML structural design, CSS styling, and Vanilla JavaScript—to create a functional application that handles mathematical operations, complex state management, operator chaining, and edge cases gracefully.

---

## Built With

- **HTML5:** Structural layout for calculator container, display screen, and button layout.
- **CSS3:** Responsive layout architecture, custom button styling, and flex-based layout alignment.
- **JavaScript (ES6+):** DOM manipulation, event listeners, state variable management, and mathematical evaluation logic.
- **Git & GitHub:** Version control and GitHub Pages deployment.

---

## Key Features

- **Basic Math Operations:** Supports addition, subtraction, multiplication, and division.
- **Chained Operations:** Evaluates active expressions when pressing consecutive operator buttons (e.g., `12 + 7 - 1`).
- **Error Handling:** Guards against division by zero by displaying `Error!` and resetting internal state.
- **Smart Decimal Rounding:** Rounds long decimal results to 4 decimal places to prevent display overflow and fix JavaScript floating-point precision issues (e.g., `0.1 + 0.2`).
- **State Reset on New Input:** Typing a new digit immediately following a completed calculation (`=`) clears the previous result and starts a fresh operation.
- **Clear Functionality:** Dedicated clear button (`AC`) to wipe display and reset all memory variables.

---

## Live Preview

- [Live Demo Link](https://bekirxubuntu.github.io/odin-calculator/)

---

## Key Learnings

- **State Management:** Controlled app state using `firstNumber`, `secondNumber`, `currentOperator`, and boolean flags like `isCalculated`.
- **Edge-Case Guarding:** Handled zero-division crashes, unexpected execution order, and input overwrite scenarios.
- **DOM Manipulation & Event Handling:** Utilized `querySelectorAll` and `forEach` loops to attach event listeners to digit and operator buttons dynamically.
- **Modular Logic Design:** Separated core arithmetic helpers (`add`, `subtract`, `multiply`, `divide`) from the execution pipeline (`operate`).
- **Git Workflow:** Maintained structured commits following conventional standards.

---

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bekirxubuntu/odin-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd odin-calculator
   ```
3. Open `index.html` in your browser or launch it using VS Code Live Server.