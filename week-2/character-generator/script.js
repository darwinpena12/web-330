/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Darwin Pena Cabrera
  Date: 04/05/2026
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  // Character variables
  let characterName = name;
  let characterGender = gender;
  let characterClassRole = characterClass;

  // Return character private variables
  return {
    getName: function() {
      return characterName;
    },
    getGender: function() {
      return characterGender;
    },
    getClass: function() {
      return characterClassRole;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
  const hero = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  const output = document.getElementById("characterOutput");
  output.innerHTML =
  "<p> Name: " + hero.getName() + "</p>" +
  "<p> Gender: " + hero.getGender() + "</p>" +
  "<p> Class: " + hero.getClass() + "</p>";
});