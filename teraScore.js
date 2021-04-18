'use strict';

// initialize weights
var teraW1;
var teraW2;
var teraW3;
var teraW4; 
var teraW5; 
var teraW6;
var teraW7;
var teraW8; 
var teraW9;
// import values and assign weights
var AWC = 20;
var pH = 6.2;
var ec = 5.0;
var soilTemp = 20;
var co2 = 1000;
var n = 20;
var p = 5.00;
var k = 100; 
var o2 = 10.00;
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

/////////////// CO2 ////////////

function co2Weight (co2) {
  if (co2==null) {
      teraW5 = null;
  } else if (co2 == 0) {
      teraW5 = 3.125;
  } else if (co2 >= 0.00 && co2 < 1100.00) {
      teraW5 = 6.250;
  } else if (co2 >= 1100.00 && co2 < 1835.00) {
      teraW5 = 9.375;
  } else if (co2 >= 1835.00 && co2 < 3000.00) {
      teraW5 = 12.499;
  } else if (co2 >= 3000.00 && co2 < 7340.00) {
      teraW5 = 9.375;
  } else if (co2 >= 7340.00 && co2 < 50000) {
      teraW5 = 3.125;
  } else {
      teraW5 = 0;
  }
   return teraW5;
};

console.log("Co2 Weight: ", co2Weight(co2));


////////// Nitrate (NO3-) ///////////////
function nWeight (n) {
    if (n==null) {
        teraW6 = null;
    } else if (n >= 0 && n < 5.00) {
        teraW6 = 3.125;
    } else if (n >= 5.00 && n < 10.00) {
        teraW6 = 6.250;
    } else if (n >= 10.00 && n < 15.00) {
        teraW6 = 9.375;
    } else if (n >= 15.00 && n < 20.00) {
        teraW6 = 12.499;
    } else if (n >= 20.00 && n < 25.00) {
        teraW6 = 12.499;
    } else if (n >= 25.00 && n < 30.00) {
        teraW6 = 9.375;
    } else if (n >= 30.00 && n < 35.00) {
        teraW6 = 6.250;
    } else if (n >= 35.00 && n < 100.00) {
        teraW6 = 3.125;
    } else {
        teraW6 = 0;
    }
    
    return teraW6;
};

console.log("n Weight: ", nWeight(n));

/////// Phosphate (PO4) ///////////
function pWeight (p) {
  if (p==null) {
      teraW7 = null;
  } else if (p >= 0.00 && p < 1.60) {
      teraW7 = 6.250;
  } else if (p >= 1.60 && p < 2.50) {
      teraW6 = 9.375;
  } else if (p >= 2.50 && p < 3.30) {
      teraW7 = 12.499;
  } else if (p >= 3.30 && p < 4.10) {
      teraW7 = 12.499;
  } else if (p >= 4.10 && p < 4.90) {
      teraW7 = 12.499;
  } else if (p >= 4.90 && p < 5.70) {
      teraW7 = 9.375;
  } else if (p >= 5.70 && p < 6.50) {
      teraW7 = 6.250;
  } else if (p >= 6.50) {
      teraW7 = 3.125;
  } else {
      teraW7 = 0;
  }
    return teraW7;  
};

console.log("p Weight: ", pWeight(p));

///// Potassium /////// 
function kWeight (k) {
    if (k==null) {
        teraW8 = null;
    } else if (k >= 0.00 && k < 50.00) {
        teraW8 = 3.125;
    } else if (k >= 50.00 && k < 100.00) {
        teraW8 = 6.250;
    } else if (k >= 100.00 && k < 150.00) {
        teraW8 = 9.375;
    } else if (k >= 150.00 && k < 200.00) {
        teraW8 = 12.499;
    } else if (k >= 200.00 && k < 250.00) {
        teraW8 = 12.499;
    } else if (k >= 250.00 && k < 350.00) {
        teraW8 = 9.375;
    } else if (k >= 350.00 && k < 800.00) {
        teraW8 = 6.250;
    } else if (k >= 800.00 && k <= 1000.00) {
        teraW8 = 3.125;
    } else {
        teraW8 = 0;
    }
    
    return teraW8;
}; 

console.log("k Weight: ", kWeight(k)); 

// O2 /////// 
function o2Weight (o2) {
    if (o2==null) {
        teraW9 = null;
    } else if (o2 >= 0.00 && o2 < 5.00) {
        teraW9 = 3.125;
    } else if (o2 >= 5.00 && o2 < 12.00) {
        teraW9 = 6.250;
    } else if (o2 >= 12.00 && o2 < 17.00) {
        teraW9 = 9.375;
    } else if (o2 >= 17.00 && o2 < 19.00) {
        teraW9 = 12.499;
    } else if (o2 >= 19.00 && o2 < 21.00) {
        teraW9 = 12.499;
    } else if (o2 >= 21.00 && o2 < 23.00) {
        teraW9 = 9.375;
    } else if (o2 >= 23.00 && o2 < 25.00) {
        teraW9 = 6.250;
    } else if (o2 >= 25.00 && o2 < 30.00) {
        teraW9 = 3.125;
    }
    
    return teraW9;
}

console.log("o2 Weight: ", o2Weight(o2));

// LOAD WEIGHTS //// 
teraW1 = awcWeight(AWC);
teraW2 = pHWeight(pH);
teraW3 = ecWeight(ec);
teraW4 = tempWeight(soilTemp);
teraW5 = co2Weight(co2);
teraW6 = nWeight(n); 
teraW7 = pWeight(p);
teraW8 = kWeight(k);
teraW9 = o2Weight(o2);

//// Calculate TeraScore 

function teraCalc(teraW1, teraW2, tera3, teraW4, teraW5, teraW6, teraW7, teraW8, teraW9) {
    var teraS;
    teraS = teraW2+teraW2+teraW3+teraW4+teraW5+teraW6+teraW7+teraW8+teraW9;
    if (teraS > 100) {
        teraS = 100;
    }
    return teraS;
}

var teraScore = teraCalc(teraW1, teraW2, teraW3, teraW4, teraW5, teraW6, teraW7, teraW8, teraW9);
console.log(teraScore.toFixed(2));


module.exports = {
  teraW1,
  teraW2,
  teraW3,
  teraW4,
  teraW5,
  teraW6,
  teraW7,
  teraW8, 
  teraW9,
  teraScore
};





