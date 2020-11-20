'use strict';

// function to return the min and max of a list 
function returnMin(inputList) {
    var minVal = Math.min.apply(Math, inputList);
    return minVal;
};

function returnMax(inputList) {
    var maxVal = Math.max.apply(Math, inputList);
    return maxVal;
};

// INPUT 1: AIR TEMPERATURE
// sample last 24 hrs airTemp from sensor head readings
let airTempSample = [20,21,23,20,21,23,20,21,23,20,21,23,20,21,23,20,21,23,20,21,23,20,21,23]
var airMin = returnMin(airTempSample);
var airMax = returnMax(airTempSample);
console.log("AirTemp Min (C): ", airMin); 
console.log("Airtemp Max (C): ", airMax); 

// INPUT 2: PRECIPITATION PROBABILITY 
// sample last 24 hours from weather station 
let rainSample = [0.03, 0.03, 0.02, 0.02, 0, 0.05, 0.03, 0.03, 0.02, 0.02, 0, 0.05, 0.03, 0.03, 0.02, 0.02, 0, 0.05, 0.03, 0.03, 0.02, 0.02, 0, 0.05]
var rainMin = returnMin(rainSample);
var rainMax = returnMax(rainSample);
console.log("Precipitation Prob Min (%): ", rainMin); 
console.log("Airtemp Max (%): ", rainMax); 

// INPUT 3: SoilTextureClass

