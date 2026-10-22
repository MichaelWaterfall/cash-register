# Cash Register

A cash register application built using HTML, CSS and JavaScript as part of the freeCodeCamp JavaScript Algorithms and Data Structures curriculum.

The application calculates the change owed to a customer based on the purchase price, cash received and available money in the register.

## Features

- Calculates change using available coins and banknotes.
- Returns change starting with the highest available denomination.
- Displays three register statuses:
  - **OPEN:** The register can provide the required change.
  - **CLOSED:** The register has exactly enough money to provide the change.
  - **INSUFFICIENT_FUNDS:** The register cannot provide the exact change.
- Handles exact payments and insufficient customer payments.
- Displays the purchase price and change due on the webpage.

## Technologies Used

- **HTML5** – Page structure
- **CSS3** – Styling and layout
- **JavaScript** – Cash calculations, conditional logic, loops and DOM manipulation

## How to Run

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Enter the amount of cash received.
4. Click **Purchase** to calculate the change.

## What I Learned

This project helped me practise JavaScript functions, loops, arrays, objects and DOM manipulation. I also worked on debugging and handling floating-point precision by converting dollar amounts into cents before performing calculations.

## Project Background

Completed as part of the freeCodeCamp JavaScript Algorithms and Data Structures certification projects.