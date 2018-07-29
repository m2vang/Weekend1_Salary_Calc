let employee = [];

class Employee{
    constructor( name, lastName, idNumber, title, annualSalary){
        this.name = name;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.title = title;
        this.annualSalary = annualSalary;
    }// end of constructor
}//end of Employee class

$(document).ready(onReady);

function onReady() {
    //create table
    let table = $('<table align="center"></table>');
    table.append(
        `<thead><tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Id Number</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th>Delete</th>
        </thead>`
    );

    //create table body
    let tbody = $('<tbody id="tablebody"></tbody>');
    //add table body to table
    table.append(tbody);

    //add table to data div
    $('#data').append(table);

    //run clickHandler
    clickHandler();
} //end of onReady

function clickHandler() {
    //adding employee when submit button is clicked
    $('#submit').on('click', addToTable);

    //removing employee
    //target #tablebody, which is the parent of the delete button
    //then target the #delete of the delete button when clicked and run the removeEmployee()
    if ($('#tablebody').on('click', '#delete' , removeEmployee));

} //end of clickHandler

let mSalary = [];

function addToTable() {
    //variables
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let Id = $('#Id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let monthlySalary = Math.floor(annualSalary / 12);
    //push the monthly salary into the mSalary array
    mSalary.push(monthlySalary);

    //***create new employee & push it into the employee array
    //let newEmployee = new Employee( $('#first-name').val(), $('#last-name').val(), 
    //$('#Id').val(), $('#title').val(), $('#annual-salary').val() );
    //line below is a better way to code for the same two lines above
    employee.push(new Employee ($('#first-name').val(), $('#last-name').val(),
        $('#Id').val(), $('#title').val(), $('#annual-salary').val()) );
    
    //adding value input to the table body
    $('#tablebody').append(
        '<tr id="row"><td>' + firstName + 
            '</td><td>' + lastName +
            '</td><td>' + Id + 
            '</td><td>' + title + 
            '</td><td>' + '$' + annualSalary + 
            '</td><td><button id="delete">X</button></td>'  +
        '</tr>');

    
    //updating mSalary & displaying it after clicking on submit
    $('.monthlySal').html('Total Monthly: $' + mSalary.reduce(getSum).toFixed(2)); //.reduce means that it'll reduce the array to a single value
    //change total monthly background color to red if mSalary is greater than 20000
    if (mSalary.reduce(getSum).toFixed(2) > 20000){
        $('#footer').css('background-color', 'red');
    }//end of if statement

    //empty each input
    $('#first-name').val('');
    $('#last-name').val('');
    $('#Id').val('');
    $('#title').val('');
    $('#annual-salary').val('');
} //end of addToTable

function getSum(total, num) {
    return total + num;
} //end of getSum

function removeEmployee() {
    $('#row').remove();
}//end of removeEmployee