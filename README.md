# Assignment-for-Incubyte
Project Overview
This project provides a utility function add that:

Takes a string of comma-separated numbers as input.
Returns their sum while adhering to specific rules:
Calling the method with a negative number throws an exception, listing all negatives.
Handles empty strings and returns 0.
Supports multiple numbers.

## Prerequisites
Node.js (version 14 or higher) <br/>
npm (Node Package Manager)

## Installation
1. Clone the repository:

     ```bash
      git clone https://github.com/ashishpalttn/Assignment-for-Incubyte.git
2. Move to tdd-assignment branch
   ```bash
   git checkout tdd-assignment

4. Install the dependencies:

    ```bash
    npm install

5. The project uses Jest for testing. To run the test suite:

    ```bash
    npm test


## Screenshot
![Description of Screenshot](./assets/assessment.png)

### Project Structure
string-calculator/
├── stringCalculator.js          # Implementation
├── stringCalculator.test.js     # Unit tests
├── package.json                 # Project configuration
├── package-lock.json            # Dependency lock file
└── README.md                    # Project documentation

## Rules Implemented
1- Empty String:
Input: "" → Output: 0

2- Single Number:
Input: "5" → Output: 5

3- Two Numbers:
Input: "1,5" → Output: 6

4- Multiple Numbers:
Input: "10,20,30" → Output: 60

5- Negative Numbers:
Input: "1,-5" → Throws Error: Negatives not allowed: -5

6- Multiple Negative Numbers:
Input: "1,-5, -10" → Throws Error: Negatives not allowed: -5 , -10

