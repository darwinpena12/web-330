"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House Directions
    Author: Darwin Pena Cabrera
    Date: 04/26/2026

    Filename: js10b.js
*/


// Function to set up and display the Oak Top House Map
function initMap() {

   // Page objects
   let displayMap = document.getElementById("displayMap");
   let routeBox =    document.getElementById("routeBox");

   // Create a map to the Oak Top House
   let oakTopHouse = {lat: 39.96118, lng: -82.99879};

   let myMap = new google.maps.Map(displayMap, {
    zoom: 11,
    center: oakTopHouse,
    fullscreenControl: false,
   });


}


