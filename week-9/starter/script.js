"use strict";

const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Dune", author: "Frank Herbert" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Harry Potter", author: "J.K. Rowling" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" }
];


// setTimeout creates a delay
function fetchBooks() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success = true; // simulate success/failure

      if (success) {
        resolve(books);   // async success result
      } else {
        reject("Failed to load books."); // async error case
      }

    }, 1000); // 1 second delay
  });
}

// little addition to deliver something different in every execution
function shuffleArray(array) {
  const copy = [...array]; // avoid modifying original data

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// Async function that deliver data to the user
async function displayBooks() {

  const output = document.getElementById("output");


  output.innerHTML = "<p>Loading books...</p>";

  try {

    // await that allow fetchBooks to finish first
    const data = await fetchBooks();


    const randomBooks = shuffleArray(data);

    output.innerHTML = "";


    randomBooks.forEach(book => {
      const div = document.createElement("div");
      div.classList.add("book");

      div.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
      `;

      output.appendChild(div);
    });

  } catch (error) {

    // In case of error this line pops up
    output.innerHTML = `<p style="color:red;">${error}</p>`;
  }
}

document.getElementById("loadBtn")
  .addEventListener("click", displayBooks);