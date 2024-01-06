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
    let salaryValue = document.getElementById("salary").value;
    // Using the input values it creates an object and adds it to the global array
    const employee = {
        firstName: `${firstNameValue}`,
        lastName: `${lastNameValue}`,
        idNumber: `${IDValue}`,
        jobTitle: `${jobTitleValue}`,
        annualSalary: `${salaryValue}`
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
}


function updateTable(data) {
    let tableBody = document.getElementById("employee-list");

    tableBody.innerHTML = "";
    
    for (let i = 0; i < data.length; i++) {
        let formattedSalary = parseFloat(data[i].annualSalary).toLocaleString();

        let row = `
        <tr>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].idNumber}</td>
            <td>${data[i].jobTitle}</td>
            <td>$${formattedSalary}</td>
            <td><button>Delete</button></td>
        </tr>`

        tableBody.innerHTML += row;
    }
}

