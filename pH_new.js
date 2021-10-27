'use strict';

// this is the pH raw voltage at the start of transmitting data in the field 
var pH_raw_start = 2100
// this is the current raw pH voltage
var pH_raw_current = 2200

// converted pH at the start of time in the field 
function pH_start(pH_raw_start) {
    var convertedpH;
    if (pH_raw_start < 1500) {
        convertedpH = 6.00
    } else if (pH_raw_start >= 1500 & pH_raw_start < 2200) {
        convertedpH = 6.50
    } else if (pH_raw_start >= 2200) {
        convertedpH = 7.00
    };

    return convertedpH.toFixed(3);
}; 

// now update pH based on current input 

function pH_Diff(pH, pH_raw_start, pH_raw_current) {
    var pH_now;
    var pH_raw_diff;
    if (pH_raw_current != 0 & pH_raw_current != 3300) {
        pH_raw_diff = (pH_raw_current - pH_raw_start) * 0.0016;
    } else {
        pH_raw_diff = null;
        convertedpH_current = null; 
    }

    //pH_now = (pH + pH_raw_diff);
    return pH_raw_diff;
    
};

// apply difference in pH to starting value 
function pHNow (pH, pH_diff) {
    pH_now = pH + pH_diff;
    if (pH_now <= 6) {
        pH_now = 6
    } else if (pH_now >= 8) {
        pH_now = 8
    }
    return pH_now;
}

var pH = Number(pH_start(pH_raw_start));
console.log("pH Start: ", pH);
// difference in pH
var pH_diff= pH_Diff(pH, pH_raw_start, pH_raw_current);
var pH_now = pHNow(pH, pH_diff);
console.log("pH Now: ", pH_now);
