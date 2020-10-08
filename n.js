const { nCurve } = require('./curves.js')
'use strict';
// raw to molarity (mol/L) calibration curve
// 6-point NO3- Piecewise Regression Curve

// current raw mV P value
var nRaw = 1500;
// var nRaw = event['nRaw'];

// current VWC - Soil Moisture % 
var moisture = 0.15
// var moisture = event['moisture']

// STEP 1: Convert raw mV to molarity (mol/L)

function nMol(nRaw, nCurve) {
    var convertedN;
    
    vn1 = nCurve['vn1'];
    vn2 = nCurve['vn2'];
    vn3 = nCurve['vn3'];
    vn4 = nCurve['vn4'];
    vn5 = nCurve['vn5'];
    vn6 = nCurve['vn6'];
    cn1 = nCurve['cn1'];
    cn2 = nCurve['cn2'];
    cn3 = nCurve['cn3'];
    cn4 = nCurve['cn4'];
    cn5 = nCurve['cn5'];
    cn6 = nCurve['cn6'];
    
    if (nRaw==null) {
        convertedN = null;
    } else if (nRaw <= vn1) {
        convertedN = cn1;
    } else if (nRaw > vn1 && nRaw <= vn2) {
        convertedN = (nRaw-vn1)*((cn2-cn1)/(vn2-vn1))+cn1;
    } else if (nRaw > vn2 && nRaw <= vn3) {
        convertedN = (nRaw-vn2)*((cn3-cn2)/(vn3-vn2))+cn2;
    } else if (nRaw > vn3 && nRaw <= vn4) {
        convertedN = (nRaw-vn3)*((cn4-cn3)/(vn4-vn3))+cn3;
    } else if (nRaw > vn4 && nRaw <= vn5) {
        convertedN = (nRaw-vn4)*((cn5-cn4)/(vn5-vn4))+cn4;
    } else if (nRaw > vn5 && nRaw <= vn6) {
        convertedN = (nRaw-vn5)*((cn6-cn5)/(vn6-vn5))+cn5;
    } else {
        convertedN = null;
    }
    
    return convertedN.toFixed(5);
}; 


var nMolarity = nMol(nRaw, nCurve);
console.log("NO3- (mol/L): ", nMolarity);

// STEP 2 

// convert mol/l to PPM (mg/L)

function nPPM (nMolarity) {
    var convertedNppm;
    if (nMol==null) {
        convertedNppm = null;
    } else {
        convertedNppm = ((nMolarity*62.005)*1000)*(14.0067/62.0049);   
    }
    
    return convertedNppm.toFixed(2);
};

var nPPM1 = nPPM(nMolarity);
console.log("NO3- (PPM): ", nPPM1);

module.exports = { 
    nMolarity,
    nPPM1
                 };
