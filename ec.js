// Electircal Conductivity aka Salinity 
// EC units=dS/m
// raw = Volts (V)

const { temperatureConversion } = require('./curves.js')

'use strict';

const Rb = 150;
const A = 2;
const Ro = 0;
const Vp = 1.65;

// eulher's number 
const e = 2.718281828459045; 
const K = 0.4;

////// BRING IN TEMPERATURE
// Raw ADC input 
// var rawTemp = event['rawTemp']
var rawTemp = 403;
// hardware version
// var hardware = event["hw"]
var hardware = "hw32"
var soilTemp = temperatureConversion(rawTemp, hardware); 
console.log("SoilTemp (C): ", soilTemp);
// raw EC - Volts
// var ecRaw = event["ecRaw"]
var ecRaw = 2.21

function ecConversion(ec, temp) {
  var convertedEC;
  if (ec <= 0 || ec==null || ec >= 3.3) {
    convertedEC = null;
  }
  else {
    const Rec = ((Rb * (1/A) * ec) + Ro*(((1/A)*ec)-Vp)) / (Vp - ((1/A)*ec));
    // temp correction
    const Tcor = 0.447 + (1.4034 * (Math.pow(e, (-1*temp)))/26.815);
    const convertedECmS = ((K*Tcor)/Rec) * Math.pow(10, 6);
    // convert mS/cm to dS/m
    convertedEC = convertedECmS * (1/100000)*100;
  }
  return convertedEC.toFixed(4);
}; 

var ec = ecConversion(ecRaw, soilTemp);
console.log("EC (dS/m): ", ec); 

module.exports = { ec };