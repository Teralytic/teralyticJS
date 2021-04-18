'use strict';

// initialize weights
var teraW1;
var teraW2;
var teraW3;
var teraW4; 
// import values and assign weights
var AWC = 20;
var pH = 6.2;
var ec = 5.0;
var soilTemp = 20;
///////// AWC ///////////////// 

function awcWeight (AWC) {

    if (AWC==null) {
        teraW1 = null;
    } else if (AWC >= 0 && AWC < 15) {
        teraW1 = 1.563;
    } else if (AWC >= 15 && AWC < 25) {
        teraW1 = 3.125;
    }
      else if (AWC >= 25 && AWC < 50) {
        teraW1 = 6.250;
    } else if (AWC >= 50 && AWC < 75) {
        teraW1 = 9.375;
    } else if (AWC >= 75 && AWC <= 100) {
        teraW1 = 12.499
    } else {
        teraW1 = 0;
    }
  
    return teraW1;   
};

console.log("AWC Weight: ", awcWeight(AWC));

///////// pH ////////////////////

function pHWeight (pH) {

    if (pH==null) {
        teraW2 = null;    
    } else if (pH >= 0 && pH < 3.00) {
        teraW2 = 3.125;
    } else if (pH >= 3.00 && pH < 5.00) {
        teraW2 = 6.250;
    } else if (pH >= 5.00 && pH < 6.00) {
        teraW2 = 9.375;
    } else if (pH >= 6.00 && pH < 7.00) {
        teraW2 = 12.499;
    } else if (pH >= 7.00 && pH < 7.60) {
        teraW2 = 9.375;
    } else if (pH >= 7.60 && pH < 8.10) {
        teraW2 = 6.250;
    } else if (pH >= 8.10 && pH < 11.00) {
        teraW2 = 3.125;
    } else {
        teraW2 = 0
    }

    return teraW2;

}; 

console.log("pH Weight: ", pHWeight(pH));

///////// EC /////////////////

function ecWeight (ec) { 
    if (ec==null) {
        teraW3 = null;
    } else if (ec==0) {
        teraW3 = 3.125;
    } else if (ec > 0 && ec < 0.10) {
        teraW3 = 6.250;
    } else if (ec >= 0.10 && ec < 0.25) {
        teraW3 = 9.375;
    } else if (ec >= 0.25 && ec < 2.00) {
        teraW3 = 12.499;
    } else if (ec >= 2.00 && ec < 4.00) {
        teraW3 = 12.499;
    } else if (ec >= 4.00 && ec < 8.00) {
        teraW3 = 9.375;
    } else if (ec >= 8.00 && ec < 16.00) {
        teraW3 = 6.250;
    } else if (ec >= 16.00 && ec <= 17.00) {
        teraW3 = 3.125;
    } else {
        teraW3 = 0;
    }
    
    return teraW3;
};

console.log("ec Weight: ", ecWeight(ec));

///////// Soil Temperature ////////

function tempWeight (soilTemp) {
  if (soilTemp==null) {
      teraW4 = null;
  } else if (soilTemp >= -20.00 && soilTemp < 0.00) {
      teraW4 = 3.125;
  } else if (soilTemp >= 0.00 && soilTemp < 10.00) {
      teraW4 = 6.250;
  } else if (soilTemp >= 10 && soilTemp < 15.00) {
      teraW4 = 9.375;
  } else if (soilTemp >= 20.00 && soilTemp < 30.00) {
      teraW4 = 12.499;
  } else if (soilTemp >= 30.00 && soilTemp < 35.00) {
      teraW4 = 9.375;
  } else if (soilTemp >= 35.00 && soilTemp < 50.00) {
      teraW4 = 6.250;
  } else if (soilTemp >= 50.00 && soilTemp < 94.00) {
      teraW4 = 3.125;
  } else {
      teraW4 = 0;
  }
    
    return teraW4;
    
};

console.log("soilTemp Weight: ", tempWeight(soilTemp));


