'use strict';

function socConversion(co2) {
    var SOC1;
    var SOC2;
    var SOC3;
    // new SOC curve 
    SOC1 = (-1.46 + 0.443*(Math.log(co2))).toFixed(2);
    // original SOC curve 
    SOC2 = (-0.168 + 0.228*(Math.log(co2))).toFixed(2);
    // original SOC curve + 15%
    SOC3 = ((-0.168 + 0.228*(Math.log(co2)))*1.15).toFixed(2);

    return [SOC1, SOC2, SOC3]
}; 

//var co2 = event["co2"]
// this variable should be the 2-day average 
// or the last 24 readings of CO2 
// values (excluding zeros)
var co2 = 2175;

var SOC1 = socConversion(co2)[0];
var SOC2 = socConversion(co2)[1];
var SOC3 = socConversion(co2)[2];

console.log ("SOC 1: (%)", SOC1);
console.log ("SOC 2: (%)", SOC2);
console.log ("SOC 3: (%)", SOC3);

module.exports = {
    SOC1,
    SOC2,
    SOC3 
}
