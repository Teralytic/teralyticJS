'use strict';

// DayCent model background: https://www2.nrel.colostate.edu/projects/daycent/
// DAYCENT is the daily time-step version of the CENTURY biogeochemical model (Parton et al., 1994). DAYCENT simulates fluxes of C and N among the atmosphere, vegetation, and soil 

// function to return the min and max of a list 
function returnMin(inputList) {
    var minVal = Math.min.apply(Math, inputList);
    return minVal;
};

function returnMax(inputList) {
    var maxVal = Math.max.apply(Math, inputList);
    return maxVal;
};

function returnN2O(airMin, airMax, rainMin, rainMax, claySample, NO3, NH4) {
   
    var N2O = airMin + airMax + rainMin + rainMax + claySample[0] + NO3[0] + NH4[0];
    
    return N2O; 
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
// percent Sand / Silt / Clay 
// SAND - 6in, 18in, 36in 
let sandSample = [10, 10, 8]; 
let siltSample = [64, 64, 8];
let claySample = [26, 26, 24]; 
console.log("6in Sand (%): ", sandSample[0]);
console.log("18in Sand (%): ", sandSample[1]);
console.log("36in Sand (%): ", sandSample[2]);

// Vegetation type, cultivating, planting scheudle, timing of nutrient amenndments .... maybe use NDVI as input? 

// Nitrate 6in, 18in, 36in  PPM 
let NO3 = [22, 23, 30]
// Ammonium 6in, 18in, 36in  PPM 
let NH4 = [10, 12, 10]

// OUTPUT 
// N20 
console.log("N2O: ", returnN2O(airMin, airMax, rainMin, rainMax, claySample, NO3, NH4));