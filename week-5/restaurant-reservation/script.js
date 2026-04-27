/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Darwin Pena Cabrera
  Date: 04/26/2026
  Filename: script.js
*/
// Create an in-memory object array for each table in the restaurant

let tables = [
  {
    tableNumber: 1,
    capacity: 6,
    isReserved: false
  },
  {
    tableNumber: 2,
    capacity: 6,
    isReserved: false
  },
  {
    tableNumber: 3,
    capacity: 4,
    isReserved: false
  },
  {
    tableNumber: 4,
    capacity: 2,
    isReserved: false
  },
  {
    tableNumber: 5,
    capacity: 2,
    isReserved: false
  }
]

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Locate the desire table
  let table = tables.find(t => t.tableNumber === tableNumber);

  // Verification is the table is currently available
  if (table && !table.isReserved) {

    table.isReserved = true;

    // Call back after the time has passed
    setTimeout(() => {
      callback(`Success: Table ${tableNumber} has been reserved.`);
    }, time);
  } else {
    // Error message is the table is not available
    callback(`error: table ${tableNumber} is not available.`);
  }

}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
     e.preventDefault();


    // call values from the form
    let name = document.getElementById("name").value;
    let tableNumber = parseInt(document.getElementById("tableNumber").value);

    // Call the reserve table
    reserveTable(tableNumber, function (message) {
      // Update the webpage
      document.getElementById("message").textContent = name + ": " + message;
    }, 1000);
  });
