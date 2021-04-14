const { soilWater } = require('./soilTex.js')
'use strict';
// raw V to permitivitty

// current raw V moisture value
var moistureRaw = 2.21;
// var moistureRaw = event['moistureRaw'];

// STEP 1: Convert raw V to permittivity 

function perm(moistureRaw) {
    var convertedPerm;
    
    convertedPerm = 163+(-99.7*moistureRaw)+(14.9*(Math.pow(moistureRaw,2)))+(0.216*(Math.pow(moistureRaw,3)));
    
    return convertedPerm.toFixed(5);
}; 


var permittivity = perm(moistureRaw);
console.log("Permittivity: ", permittivity);

// Step 2: Convert Perm to VWC % Using Topp Equation

function volumetric(permittivity) {
    var convertedVWC;
    
    convertedVWC = (((4.3 * Math.pow(10,-6)) * (Math.pow(permittivity,3))) - ((5.5 * (Math.pow(10,-4))) * (Math.pow(permittivity,2))) + (2.92 * (Math.pow(10,-2)) * permittivity) - (5.3 * (Math.pow(10,-2))));
    
    return convertedVWC.toFixed(4)
};

var vwc = volumetric(permittivity);
//console.log("VWC: ", vwc)

// Step 3: Bring in Soil Texture 

// bring in soil texture from event 
// soilTexture = event["soilTexture"]
var soilTexture = "Clay";
var MAL = soilWater(soilTexture)['MAL'];
var rootDepth = soilWater(soilTexture)['rootDepth'];
var coef = soilWater(soilTexture)['coef'];
//console.log("MAL: ", MAL); 
//console.log("rootDepth: ", rootDepth);
//console.log("coef: ", coef);
// available water capacity (AWC)
/*
var awc;
awc = ((((vwc*100)-MAL)*rootDepth)/10000); 
console.log("AWC (%): ", awc);
// plant available water (in/ft)
paw = (awc*coef).toFixed(2);
console.log("PAW: ", paw);
*/
// AWC 

function awc(vwc) {
    var convertedAWC;
    
    convertedAWC = ((((vwc*100)-MAL)*rootDepth)/10000); 
    
    return convertedAWC.toFixed(2);
}; 


var awc = awc(vwc);
console.log("AWC (%) : ", awc);

// PLANT available Water 
function paw(awc, coef) {
    var convertedPAW;
    
    convertedPAW = (awc*coef).toFixed(2); 
    
    return convertedPAW;
}; 

var paw = paw(awc);
console.log("AWC (%) : ", awc);

// export vars 

module.exports = {
    permittivity,
    vwc,
    awc,
    paw,
    awc
}; 


