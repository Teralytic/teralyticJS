'use strict';
// raw to molarity (mol/L) calibration curve
// 4-point Piecewise Regression Curve
const vp1 = 500.00;
const vp2 = 1500.00;
const vp3 = 2200.00;
const vp4 = 3299.99;
// mol / L
const cp1 = 0.00005;
const cp2 = 0.00007;
const cp3 = 0.00009;
const cp4 = 0.0001;


// STEP 1: Convert raw mV to molarity (mol/L)

function pMol(pRaw) {
    var convertedP;
    if (pRaw==null) {
        convertedP = null;
    } else if (pRaw <= vp1) {
        convertedP = cp1;
    } else if (pRaw > vp1 && pRaw <= vp2) {
        convertedP = (pRaw-vp1)*((cp2-cp1)/(vp2-vp1))+cp1;
    } else if (pRaw > vp2 && pRaw <= vp3) {
        convertedP = (pRaw-vp2)*((cp3-cp2)/(vp3-vp2))+cp2;
    } else if (pRaw > vp3 && pRaw <= vp4) {
        convertedP = (pRaw-vp3)*((cp4-cp3)/(vp4-vp3))+cp3;
    } else {
        convertedP = null;
    }
    
    return convertedP.toFixed(5);
}; 

var pRaw = 2100;
// var pRaw = event['pRaw'];
var pMol = pMol(pRaw);
console.log("P (mol/L): ", pMol);

// STEP 2 

// convert mol/l to PPM (mg/L)

function pPPM (pMol) {
    var convertedPppm;
    if (pMol==null) {
        convertedPppm = null;
    } else {
        convertedPppm = ((pMol*96.9872)*1000)*(30.973762/96.987);   
    }
    
    return convertedPppm.toFixed(2);
};

var pPPM = pPPM(pMol);
console.log("P (PPM): ", pPPM);

// STEP 3 

// Apply pH correction to the p PPM value --- because in reality  we can only sense a particular orthophosphate species - H2PO4-

// dihydrogen phosphate -- this is fractional correction for accounting for species of the phosphate we currently sense. Source (Ryan M., Python: https://colab.research.google.com/drive/1IC1ifG0-7GOEDuLJrWlqKCwzkqYqJGRV?authuser=2#scrollTo=ujPQ5CZO1aPq)

function p_Coef(pH, pPPM) {
    const Ka1 = 7.5 * Math.pow(10,-3);
    const Ka2 = 6.2 * Math.pow(10,-8);
    const Ka3 = 2.14 * Math.pow(10,-13);
    const x = Math.pow(10,-pH);
    const coef = (Ka1*Math.pow(x,2)) / (Math.pow(x,3) + (Ka1*Math.pow(x,2)) + Ka1*Ka2*x + (Ka1*Ka2*Ka3));
    return (pPPM*coef).toFixed(5);
};

// test function out by changing pH values -- pH 4 to 6 we can nearly fully detect, above 6 the fractional correction starts getting applied (so the value will get smaller)
var pH = 12;
//var pH = event["pH"]
var p = p_Coef(pH,pPPM);
console.log("H2PO4- (PPM): ", p);