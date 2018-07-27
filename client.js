$(document).ready(onReady);

function onReady() {
    // //add input boxes
    // $('#inputs').append('<input id="first-name" type="text" />');
    // $('#inputs').append('<input id="last-name" type="text" />');
    // $('#inputs').append('<input id="Id" type="text" />');
    // $('#inputs').append('<input id="title" type="text" />');
    // $('#inputs').append('<input id="annual-salary" type="text" />');

    //add table headers
    $('#data').append(
        `<tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Id</th>
            <th>Title</th>
            <th>Annual Salary</th>
        </tr>`
    );

    //run clickHandler
    clickHandler();

} //end of onReady

function clickHandler() {
    $('#submit').on('click', addToTable);
} //end of clickHandler

function addToTable() {
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let Id = $('#Id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let addAnnSal = Math.round(annualSalary/12).toFixed(2);

    $('#data').append(
        `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${Id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            </tr>`
    );

    $('.monthlySal').html('Total Monthly: $' + addAnnSal);
} //end of addToTable