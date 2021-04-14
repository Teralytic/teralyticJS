'use strict';

// initialize weights
var teraW1;

// import values and assign weights
var AWC = 20
//console.log(AWC);

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
    
console.log(teraW1);