$(document).ready(readyNow);
function readyNow(){
    console.log(`jquery`);
    $(employeeIn).on('click', addEmployee)
}

function Employee(firstName, lastName, id, title, salary) {
    this.first = firstName;
    this.last = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
}

let employeeList = [];
function addEmployee(){
    let firstName = $('#firstIn').val();
    let lastName = $('#lastIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val();
    let employee = new Employee(firstName, lastName, id, title, salary);
    employeeList.push(employee)
    displayEmployee(employeeList[employeeList.length-1]);
    

}

function displayEmployee(employee){
    $("#employeeDisplay").append(`<tr>
    <td> ${employee.first}</td>
    <td> ${employee.last}</td>
    <td> ${employee.id}</td>
    <td> ${employee.title}</td>
    <td> ${employee.salary}</td>
    </tr>`);

}