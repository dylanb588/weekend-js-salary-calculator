onReady();

function onReady() {
    console.log("Calculator is ready!")
}

//Global variables
let employeeList = [];

// Add the user inputs to and object and push to the global array

function addEmployee(event) {
    event.preventDefault();
    // Create variables to get the user input values
    let firstNameValue = document.getElementById("first-name").value;
    let lastNameValue = document.getElementById("last-name").value;
    let IDValue = document.getElementById("id").value;
    let jobTitleValue = document.getElementById("job-title").value;
    let salaryValue = document.getElementById("salary").value;

    const employee = {
        firstName: `${firstNameValue}`,
        lastName: `${lastNameValue}`,
        idNumber: `${IDValue}`,
        jobTitle: `${jobTitleValue}`,
        annualSalary: `${salaryValue}`
    };
        
    employeeList.push(employee);
    
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("job-title").value = "";
    document.getElementById("salary").value = "";
    
    updateTable(employeeList);
}


function updateTable(data) {
    let tableBody = document.getElementById("employee-list");
    
    for (let i = 0; i < data.length; i++) {
        let row = `
        <tr>
            <td>${data[i].firstName}</td>
            <td>${data[i].lastName}</td>
            <td>${data[i].idNumber}</td>
            <td>${data[i].jobTitle}</td>
            <td>${data[i].annualSalary}</td>
            <td><button>Delete</button></td>
        </tr>`

        tableBody.innerHTML += row;
    }
}





// // Get the table that ill be adding the array to
//     let tableBody = document.getElementById("employee-list")

//     tableBody.innerHTML += `
//     <tr>
//         <td>${firstNameValue}</td>
//         <td>${lastNameValue}</td>
//         <td>${IDValue}</td>
//         <td>${jobTitleValue}</td>
//         <td>${salaryValue}</td>
//         <td><button>Delete</button></td>
//     </tr>
//     `;