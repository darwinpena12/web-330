"use strict";

const chefs = [
  { name: "Chef A", specialty: "Italian cuisine", location: "New York" },
  { name: "Chef B", specialty: "French cuisine", location: "Paris" },
  { name: "Chef C", specialty: "Japanese cuisine", location: "Tokyo" }
];

function retrieveChef(index, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(chefs[index]), delay);
  });
}

// Shared variable to store the currently retrieved chef
let currentChef = null;
/*The biggest difference lies here: before, all the chef information was
settled at once by mutual agreement.allSettled(), but now that function is replaced
 by an async function displayChefs() that works with each chef individually,
 delivering the results after the delay finishes. */
async function displayChefs() {
  const delays = [600, 900, 1200];

  for (let i = 0; i < chefs.length; i++) {
    try {
      // Store retrieved chef in shared variable
      // This variable changes every time a chef gets retrieved
      // This creates a possible issue that the same variable runs multiple times, displaying duplicate data for the chefs

      currentChef = await retrieveChef(i, delays[i]);

      const el = document.getElementById(`chef${i + 1}`);

      // Reuse shared variable when updating the DOM
      el.innerHTML = `
        <h2>${currentChef.name}</h2>
        <p>Specialty: ${currentChef.specialty}</p>
        <p>Location: ${currentChef.location}</p>
      `;
    } catch (error) {
      console.error("Error retrieving chef:", error);
    }
  }
}

displayChefs();