// soil texture values for AWC Conversion 
// FC = Field Capacity (the moisture levels 2 days after a rain event)
// PWP = Permanent Wilting Point (Don't want to drop to this level!)
// MPAW = Max Plant Available Water 
// Coef = coefficient for transdormign AWC % to available water in/ft (used for irrigation management)

'use strict';

function soilWater(soilTexture) {
    var FC;
    var PWP; 
    var MPAW;
    var coef;
    var soilVars;
  if (soilTexture == 'null') {
    var soilVars = {
      FC: 'null',
      PWP: 'null',
      MPAW: 'null',
      coef: 'null'
    };  
  } else if (soilTexture == 'Sand') {
    var soilVars = {
        FC: 13.7,
        PWP: 6.5,
        MPAW: FC-PWP,
        coef: 1
    };
  } else {
      var soilVars = {
        FC: 'null',
        PWP: 'null',
        MPAW: 'null',
        coef: 'null'
      }; 
  }

  return soilVars;    
};

// enter soil texture 
var texClass = "Sand";
// var texClass = event["Sand];

let texVars = soilWater(texClass);
console.log("Soil Texture Variables: ", texVars); 

// pass function into module exports
module.exports = { soilWater };