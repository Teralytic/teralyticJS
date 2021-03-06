const { kCurve } = require('./curves.js'); // K Piecewise regression
const { kLog1 } = require('./curves.js'); // K Logarithmic 1 
const { kLog2 } = require('./curves.js'); // K Logarithmic 2
const { kLog3 } = require('./curves.js'); // K Logarithmic 3
const { kLog4 } = require('./curves.js'); // K Logarithmic 4
'use strict';

// current raw mV P value
var kRaw = 3000;
// var nRaw = event['nRaw'];

// STEP 1: Convert raw mV to molarity (mol/L)

function kMol(kRaw, kCurve) {
    var convertedK;
    
    vk1 = kCurve['vk1'];
    vk2 = kCurve['vk2'];
    vk3 = kCurve['vk3'];
    vk4 = kCurve['vk4'];
    ck1 = kCurve['ck1'];
    ck2 = kCurve['ck2'];
    ck3 = kCurve['ck3'];
    ck4 = kCurve['ck4'];
    
    if (kRaw==null) {
        convertedK = null;
    } else if (kRaw >= vk1) {
        convertedK = ck1;
    } else if (kRaw < vk1 && kRaw >= vk2) {
        convertedK = (kRaw-vk1)*((ck2-ck1)/(vk2-vk1))+ck1;
    } else if (kRaw < vk2 && kRaw >= vk3) {
        convertedK = (kRaw-vk2)*((ck3-ck2)/(vk3-vk2))+ck2;
    } else if (kRaw < vk3 && kRaw >= vk4) {
        convertedK = (kRaw-vk3)*((ck4-ck3)/(vk4-vk3))+ck3;
    } else {
        convertedK = null;
    }
    
    return convertedK.toFixed(5);
}; 

// convert raw mV to molarity using kCurve (piecewise regression model)
var kMolarity = kMol(kRaw, kCurve);
console.log("K (mol/L): ", kMolarity);


// if you want to use a different curve for molarity, bring it in instead
var kMolarityLog1 = kLog1(kRaw);
console.log("Alternate 1 K (mol/L): ", kMolarityLog1); 
var kMolarityLog2 = kLog2(kRaw);
console.log("Alternate 2 K (mol/L): ", kMolarityLog2);
var kMolarityLog3 = kLog3(kRaw);
console.log("Alternate 3 K (mol/L) ", kMolarityLog3);
var kMolarityLog4 = kLog4(kRaw);
console.log("Alternate 4 K (mol/L) ", kMolarityLog4);

// STEP 2 

// convert mol/l to PPM (mg/L)

function kPPM (kMolarity) {
    var convertedKppm;
    if (kMolarity==null) {
        convertedKppm = null;
    } else {
        convertedKppm = (kMolarity*39.0983)*1000
    }
    return convertedKppm.toFixed(2);
};

var kPPM1 = kPPM(kMolarity);
console.log("K (PPM): ", kPPM1);
var kLbsPerAcre = kPPM1*2;
console.log("K (lbs per acre): ", kLbsPerAcre);

module.exports = { 
    kMolarity,
    kPPM1,
    kLbsPerAcre
};