"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Darwin Pena Cabrera
      Date: 05/06/2026

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  let codeValue = postalCode.value;
  let countryValue = country.value;

  place.value = "";
  region.value = "";
  // Fetch to access the API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)

  // then method to parse the JSON response object
  .then(response => response.json())

  .then(JSON => {
    place.value = JSON.places[0]["place name"];
    region.value = JSON.places[0]["state abbreviation"];
  })

  // Response in case of errors
  .catch(error => console.log(error));

}



