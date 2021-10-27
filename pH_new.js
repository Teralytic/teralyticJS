'use strict';

// this is the pH raw voltage at the start of transmitting data in the field 
var pH_raw_start = 2200
// this is the current raw pH voltage
var pH_raw_current = 2800

// converted pH at the start of time in the field 
function pH_start(pH_raw_start) {
    var convertedpH;
    if (pH_raw_start < 1500) {
        convertedpH = 6.0
    } else if (pH_raw_start >= 1500 & pH_raw_start < 2200) {
        convertedpH = 6.5
    } else if (pH_raw_start >= 2200) {
        convertedpH = 7.0
    };

    return convertedpH.toFixed(2);
}; 

// now update pH based on current input 

function pH_Current(pH, pH_raw_start, pH_raw_current) {
    var convertedpH_current;
    var pH_raw_diff;
    if (pH_raw_current >= pH_raw_start & pH_raw_current != 3300) {
        pH_raw_diff = (pH_raw_current - pH_raw_start)*0.16;
        convertedpH_current = pH + pH_raw_diff;
        if (convertedpH_current >= 8) {
            convertedpH_current = 8
        } else if (convertedpH_current <= 6) {
            convertedpH_current = 6
        };
    } else if (pH_raw_current < pH_raw_start & pH_raw_current != 0) {
        pH_raw_diff = (pH_raw_start - pH_raw_current)*0.16;
        convertedpH_current = pH - pH_raw_diff;
        if (convertedpH_current >= 8) {
            convertedpH_current = 8
        } else if (convertedpH_current <= 6) {
            convertedpH_current = 6
        };
    } else if (pH_raw_current <= 0 || pH_raw_current >= 3300) {
        pH_raw_diff = 0;
        convertedpH_current = null; 
    }

    return convertedpH_current;
    
};

var pH = pH_start(pH_raw_start);
console.log("pH Start: ", pH);

var pH_updated = pH_Current(pH, pH_raw_start, pH_raw_current);
console.log("pH Now: ", pH_updated);
