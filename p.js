const { pCurve } = require('./curves.js')
'use strict';
// raw to molarity (mol/L) calibration curve
// 4-point Piecewise Regression Curve
//console.log(pCurve)

// current raw mV P value
var pRaw = 2100;
// var pRaw = event['pRaw'];

// STEP 1: Convert raw mV to molarity (mol/L)

function pMol(pRaw, pCurve) {
    var convertedP;
    
    vp1 = pCurve['vp1'];
    vp2 = pCurve['vp2'];
    vp3 = pCurve['vp3'];
    vp4 = pCurve['vp4'];
    cp1 = pCurve['cp1'];
    cp2 = pCurve['cp2'];
    cp3 = pCurve['cp3'];
    cp4 = pCurve['cp4'];
    
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


var pMolarity = pMol(pRaw, pCurve);
console.log("P (mol/L): ", pMolarity);

// STEP 2 

// convert mol/l to PPM (mg/L)

function pPPM (pMolarity) {
    var convertedPppm;
    if (pMol==null) {
        convertedPppm = null;
    } else {
        convertedPppm = ((pMolarity*96.9872)*1000)*(30.973762/96.987);   
    }
    
    return convertedPppm.toFixed(2);
};

var pPPM1 = pPPM(pMolarity);
console.log("P (PPM): ", pPPM1);

// STEP 3 

// Apply pH correction to the p PPM value --- because in reality  we can only sense a particular orthophosphate species - H2PO4-

// dihydrogen phosphate -- this is fractional correction for accounting for species of the phosphate wecurrently sense. Source (Ryan M., Python: https://colab.research.google.com/drive/1IC1ifG0-7GOEDuLJrWlqKCwzkqYqJGRV?authuser=2#scrollTo=ujPQ5CZO1aPq)

function p_Coef(pH, pPPM) {
    const Ka1 = 7.5 * Math.pow(10,-3);
    const Ka2 = 6.2 * Math.pow(10,-8);
    const Ka3 = 2.14 * Math.pow(10,-13);
    const x = Math.pow(10,-pH);
    const coef = (Ka1*Math.pow(x,2)) / (Math.pow(x,3) + (Ka1*Math.pow(x,2)) + Ka1*Ka2*x + (Ka1*Ka2*Ka3));
    return (pPPM*coef).toFixed(5);
};

// test function out by changing pH values -- pH 4 to 6 we can nearly fully detect, above 6 the fractional correction starts getting applied (so the value will get smaller)
var pH = 8;
//var pH = event["pH"]
var pPPM2 = p_Coef(pH,pPPM1);
console.log("H2PO4- (PPM): ", pPPM2);