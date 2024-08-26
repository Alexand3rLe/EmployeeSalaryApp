// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function() { 
  // TODO: Get user input to create and return an array of employee objects

  //create empty array
  let employees = []; 

  //starts while loop
  let addemployees = true;
  while(addemployees) {
    let firstName = window.prompt("Enter employee's first name.");
    let lastName = window.prompt("Enter employee's last name.");
    let salaryInput = window.prompt('Enter employee salary.')

    let salary = isNaN(Number(salaryInput)) ? 0: Number(salaryInput)
      
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    //push object to array 
    employees.push(employee)

    //ends while loop
    let addMore = window.confirm('Do you want to add another employee')

    if(addMore) {
      addemployees = true
    }
    else{
      addemployees = false
    }
  }
  return employees;
}
// Display  the average salary
const displayAverageSalary = function(employees) {
  //adds salaries 
  const salarySum = employees.map(employee => employee.salary).reduce((acc, curr) => acc + curr, 0)
  //divides sum
  const averageSalary = salarySum / employees.length;
  console.log(`The average salary is ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Picks random employee from employees array 
  const pickWinner = Math.floor(Math.random() * employeesArray.length);
  const winner = employeesArray[pickWinner];
  //winner creates a new array that we pick the properties from 
  console.log(`Congrats ${winner.firstName} ${winner.lastName} on winning the drawing!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
