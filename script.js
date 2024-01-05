onReady();

function onReady() {
    console.log("Calculator is ready!")
}

//Global variables
// let employeeList = [];


function addEmployee(event) {
    event.preventDefault();
// Create variables to get the user input values
    let firstNameValue = document.getElementById("first-name").value;
    let lastNameValue = document.getElementById("last-name").value;
    let IDValue = document.getElementById("id").value;
    let jobTitleValue = document.getElementById("job-title").value;
    let salaryValue = document.getElementById("salary").value;

// Add the user inputs to and object and push to the global array
// const employee = {
//     firstName: `${firstNameValue}`,
//     lastName: `${lastNameValue}`,
//     idNumber: `${IDValue}`,
//     jobTitle: `${jobTitleValue}`,
//     annualSalary: `${salaryValue}`
// };
    
//     employeeList.push(employee);

// Get the table that ill be adding the array to
    let tableBody = document.getElementById("employee-list")

    tableBody.innerHTML += `
    <tr>
        <td>${firstNameValue}</td>
        <td>${lastNameValue}</td>
        <td>${IDValue}</td>
        <td>${jobTitleValue}</td>
        <td>${salaryValue}</td>
        <td><button>Delete</button></td>
    </tr>
    `

    firstNameValue.value = "";
    lastNameValue.value = "";
    IDValue.value = "";
    jobTitleValue.value = "";
    salaryValue.value = "";
}