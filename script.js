onReady();

function onReady() {
    console.log("Calculator is ready!")
}

//Global variables
let employeeList = [];

function addEmployee(event) {
    event.preventDefault();
    // Create variables to get the user input values
    let firstNameValue = document.getElementById("first-name").value;
    let lastNameValue = document.getElementById("last-name").value;
    let IDValue = document.getElementById("id").value;
    let jobTitleValue = document.getElementById("job-title").value;
    // Turns the salary string into a number
    let salaryValue = parseFloat(document.getElementById("salary").value);
    // Using the input values it creates an object and adds it to the global array
    const employee = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        idNumber: IDValue,
        jobTitle: jobTitleValue,
        annualSalary: salaryValue.toLocaleString()
    };
        
    employeeList.push(employee);
    // Clear the inputs
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("job-title").value = "";
    document.getElementById("salary").value = "";
    // Runs a function to update the table
    updateTable(employeeList);
    calculateBudget(employeeList);
}

// Create a function that takes the employee object thats added to the array and puts it in a table on the DOM
function updateTable(data) {
    //Gets the list where I'll be adding the table
    let tableBody = document.getElementById("employee-list");
    // Clears it every time so it doesnt loop through employees already added
    tableBody.innerHTML = "";
    // Loops through the array and adds each object key to the table
    for (let i = 0; i < data.length; i++) {

        let row = `
        <tr>
            <td align="center">${data[i].firstName}</td>
            <td align="center">${data[i].lastName}</td>
            <td align="center">${data[i].idNumber}</td>
            <td align="center">${data[i].jobTitle}</td>
            <td align="center">$${data[i].annualSalary}</td>
            <td align="center"><button onclick="removeEmployee(event)">Delete</button></td>
        </tr>`

        tableBody.innerHTML += row;
    }
}

// Make a function that takes the annual salary key loops through each one and creates a monthly
// budget addded to the DOM
function calculateBudget(employeeList) {
    // Set the budget to 0 if no employees are in the employeeList
    if (employeeList.length === 0){
        const budgetList = document.getElementById("monthly-budget");
        budgetList.innerHTML = `<div>Monthly Budget: $0.00</div>`;
        return;
    }
    // Set the annual salary to 0
    let totalAnnualSalary = 0;
    // Loop through 
    for (let i = 0; i < employeeList.length; i++) {
        // get rid of the format that adds the commas to add up the numbers
        const noCommas = parseFloat(employeeList[i].annualSalary.replace(/,/g,''));
        totalAnnualSalary += noCommas
    }
    // Divides the total annual salaries by 12 to find the monthly budget
    let monthlyBudget = totalAnnualSalary / 12;

    const budgetList = document.getElementById("monthly-budget");
    // Clears the budget every time so it can update when new employee is added to the list 
    budgetList.innerHTML = "";
    // Formats the budget to the USD standard
    const formatBudget = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(monthlyBudget);
    // Turns the background red if budget over 20000
    if (monthlyBudget > 20000) {
        budgetList.innerHTML += `<p style="background-color: red;">Monthly Budget: ${formatBudget}</p>`;
    } else {
        budgetList.innerHTML += `<p>Monthly Budget: ${formatBudget}</p>`;
    }
}

// Create a function that removes the employee from both the table and the array as well as updating the monthly 
// budget.
function removeEmployee(event) {
    // save the onclick event to a variable
    let rowRemoved = event.target.closest('tr');
    let employeeToRemove = Array.from(rowRemoved.parentNode.children).indexOf(rowRemoved);
    // removes from the table
    rowRemoved.remove();
    // removes from the array and calls calculateBudget to recalculate after an employee is removed.
    if (employeeToRemove !== -1) {
        employeeList.splice(employeeToRemove, 1);
        calculateBudget(employeeList);
    }
}