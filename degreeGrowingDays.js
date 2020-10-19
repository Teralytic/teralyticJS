const { degreeGrowing } = require('./curves.js')
'use strict';
// bring in Tbase values from curves 

// sample last 24 hrs for Temperature Max, Temperature Min (celcius)
var tempSample;
var tempMin;
var tempMax; 
var tempBase;
tempSample = [28, 26, 27, 28, 28, 26, 27, 28, 28, 26, 27, 28, 28, 26, 27, 27];
tempMin = Math.min(...tempSample);
console.log("Temp Min (C): ", tempMin);
tempMax = Math.max(...tempSample);
console.log("Temp Max (C): ", tempMax);
// bring in crop from field
var currentCrop;
currentCrop = "Corn";
// currentCrop = event["crop"];
var degreeGrowingDays;
tempBase = degreeGrowing[currentCrop];
console.log("Temp Base: ", tempBase);

function calculateDGD (tempMin, tempMax, tempBase) {
  var degreeGrowingDays;
  degreeGrowingDays = ((tempMax + tempMin)/2)-tempBase;
  return degreeGrowingDays;
};

console.log("Degree Growing Days: ", calculateDGD(tempMin, tempMax, tempBase));