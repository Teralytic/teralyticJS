const { o2Curve } = require('./curves.js')
'use strict';
// raw mV to o2 calibration curve
// 6-point pH Piecewise Regression Curve

// current raw mV value
var o2Raw = 1500;
// var pHRaw = event['pHRaw'];

// STEP 1: Convert raw mV to pH

function o2Convert(o2Raw, o2Curve) {
    var convertedO2;
    
    v1 = o2Curve['v1'];
    v2 = o2Curve['v2'];
    v3 = o2Curve['v3'];
    v4 = o2Curve['v4'];
    v5 = o2Curve['v5'];
    v6 = o2Curve['v6'];
    c1 = o2Curve['c1'];
    c2 = o2Curve['c2'];
    c3 = o2Curve['c3'];
    c4 = o2Curve['c4'];
    c5 = o2Curve['c5'];
    c6 = o2Curve['c6'];
    
    if (o2Raw==null) {
        convertedO2 = null;
    } else if (o2Raw <= v1) {
        convertedO2 = c1;
    } else if (o2Raw > v1 && o2Raw <= v2) {
        convertedO2 = (o2Raw-v1)*((c2-c1)/(v2-v1))+c1;
    } else if (o2Raw > v2 && o2Raw <= v3) {
        convertedO2 = (o2Raw-v2)*((c3-c2)/(v3-v2))+c2;
    } else if (o2Raw > v3 && o2Raw <= v4) {
        convertedO2 = (o2Raw-v3)*((c4-c3)/(v4-v3))+c3;
    } else if (o2Raw > v4 && o2Raw <= v5) {
        convertedO2 = (o2Raw-v4)*((c5-c4)/(v5-v4))+c4;
    } else if (o2Raw > v5 && o2Raw <= v6) {
        convertedO2 = (o2Raw-v5)*((c6-c5)/(v6-v5))+c5;
    } else {
        convertedO2 = null;
    }
    
    return convertedO2.toFixed(4);
}; 

var o2 = o2Convert(o2Raw, o2Curve);
console.log("o2 (PPM) : ", o2)

module.exports = { o2 };