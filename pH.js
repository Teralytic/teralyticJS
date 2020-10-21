const { pHCurve } = require('./curves.js')
const { pHLin1 } = require('./curves.js')
'use strict';
// raw mV to pH calibration curve
// 6-point pH Piecewise Regression Curve

// current raw mV value
var pHRaw = 1500;
// var pHRaw = event['pHRaw'];

// STEP 1: Convert raw mV to pH

function pHConvert(pHRaw, pHCurve) {
    var convertedpH;
    
    vpH1 = pHCurve['vpH1'];
    vpH2 = pHCurve['vpH2'];
    vpH3 = pHCurve['vpH3'];
    vpH4 = pHCurve['vpH4'];
    vpH5 = pHCurve['vpH5'];
    vpH6 = pHCurve['vpH6'];
    cpH1 = pHCurve['cpH1'];
    cpH2 = pHCurve['cpH2'];
    cpH3 = pHCurve['cpH3'];
    cpH4 = pHCurve['cpH4'];
    cpH5 = pHCurve['cpH5'];
    cpH6 = pHCurve['cpH6'];
    
    if (pHRaw==null) {
        convertedpH = null;
    } else if (pHRaw <= vpH1) {
        convertedpH = cpH1;
    } else if (pHRaw > vpH1 && pHRaw <= vpH2) {
        convertedpH = (pHRaw-vpH1)*((cpH2-cpH1)/(vpH2-vpH1))+cpH1;
    } else if (pHRaw > vpH2 && pHRaw <= vpH3) {
        convertedpH = (pHRaw-vpH2)*((cpH3-cpH2)/(vpH3-vpH2))+cpH2;
    } else if (pHRaw > vpH3 && pHRaw <= vpH4) {
        convertedpH = (pHRaw-vpH3)*((cpH4-cpH3)/(vpH4-vpH3))+cpH3;
    } else if (pHRaw > vpH4 && pHRaw <= vpH5) {
        convertedpH = (pHRaw-vpH4)*((cpH5-cpH4)/(vpH5-vpH4))+cpH4;
    } else if (pHRaw > vpH5 && pHRaw <= vpH6) {
        convertedpH = (pHRaw-vpH5)*((cpH6-cpH5)/(vpH6-vpH5))+cpH5;
    } else {
        convertedpH = null;
    }
    
    return convertedpH.toFixed(2);
}; 

var pH = pHConvert(pHRaw, pHCurve);
console.log("pH: ", pH)
var pHLinear1 = pHLin1(pHRaw);
console.log("pH Alt 1: ", pHLinear1);

module.exports = { pH };
