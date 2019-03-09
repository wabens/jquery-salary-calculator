$(document).ready(readyNow);
function readyNow(){
    console.log(`jquery`);
    $('#employeeIn').on('click', addEmployee);
    $('#employeeDisplay').on('click', '.removeButton', removeEmployee);
}

// Employee constructor function
function Employee(firstName, lastName, id, title, salary) {
    this.first = firstName;
    this.last = lastName;
    this.id = id;
    this.title = title;
    this.salary = salary;
}

let employeeList = [];
let totalMonthly = 0;
// pull data from input fields. create employee add to employeeList.
// Call displayEmployee and update+display totalMonthly for each employee
function addEmployee(){  
    let firstName = $('#firstIn').val();
    let lastName = $('#lastIn').val();
    let id = $('#idIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val();
    let employee = new Employee(firstName, lastName, id, title, salary);
    employeeList.push(employee)
    console.log(employeeList);
    displayEmployee(employeeList);
    totalMonthly+=Number(employee.salary);
    console.log('total: ', totalMonthly);
    displayMonthly(totalMonthly)

}

// Recieve employee from addEmployee. Empty contents of .tableData
// Put data in table rows and append to table.
function displayEmployee(employeeList){
    $(".tableData").remove()
    for (let i = 0; i < employeeList.length; i++) {
        let dataRow=(`<tr class="tableData">
        <td> ${employeeList[i].first}</td>
        <td> ${employeeList[i].last}</td>
        <td> ${employeeList[i].id}</td>
        <td> ${employeeList[i].title}</td>
        <td> ${employeeList[i].salary}</td>
        <td><button class="removeButton" id="removeButtonIndex${i}">-</button> 
        </tr>`);
        $("#employeeDisplay").append(dataRow);
        addData(i)
        
    }
    //addData(employeeList)
}

// adds data of employeeList index to remove button element
function addData(i){
    $(`#removeButtonIndex${i}`).data('index', i);
    console.log(`data: `, $(`#removeButtonIndex${i}`).data('index'));
}

function displayMonthly(total){
    $('#monthlyDisplay').empty()
    $('#monthlyDisplay').append(`<p id="monthlyCounter">Total Monthly: ${total}</p>`)
}

// removes employee from array based on data from add EMployee and re-displays employees
function removeEmployee(){
    let i=$(this).data('index');
    let removed = employeeList.splice(i,1);
    console.log('removed: ', removed[0]);
    totalMonthly-=Number(removed[0].salary)
    console.log(totalMonthly);
    displayMonthly(totalMonthly)
    displayEmployee(employeeList);

    
}


