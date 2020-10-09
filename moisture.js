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

function volumetric(permittivity) {
    var convertedVWC;
    
    convertedVWC = (((4.3 * Math.pow(10,-6)) * (Math.pow(permittivity,3))) - ((5.5 * (Math.pow(10,-4))) * (Math.pow(permittivity,2))) + (2.92 * (Math.pow(10,-2)) * permittivity) - (5.3 * (Math.pow(10,-2))));
    
    return convertedVWC.toFixed(4)
};

var vwc = volumetric(permittivity);
console.log("VWC: ", vwc)

module.exports = {
    permittivity,
    vwc
}


