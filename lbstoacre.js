// import PPM vals 
const { nPPM1 } = require('./n.js');
const { pPPM1 } = require('./p.js');
'use strict';

// current depth: 6in, 18in, 36in  

function ppmtoLbs (ppm) {
    lbstoAcre = ppm*2;
    return lbstoAcre;
}; 

// NO3- lbs per acre
nlbsAcre = ppmtoLbs(nPPM1);
console.log("NO3- lbs per acre: ", nlbsAcre);
// P lbs per acre
plbsAcre = ppmtoLbs(pPPM1);
console.log("P lbs per acre: ", plbsAcre);