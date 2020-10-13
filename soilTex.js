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
        MPAW: 7.2,
        coef: 1
    };
  } else if (soilTexture == 'Fine sand' ) {
    var soilVars = {
        FC: 13.7,
        PWP: 6.5,
        MPAW: 7.2,
        coef: 4.5
    };
  } else if (soilTexture == 'Very fine sand') {
    var soilVars = {
      FC: 13.7,
      PWP: 6.5,
      MPAW: 7.2,
      coef: 4.5
    };
  } else if (soilTexture == 'Coarse sand') {
    var soilVars = {
      FC: 13.7,
      PWP: 10.2,
      MPAW: 3.5,
      coef: 1
    };
  } else if (soilTexture == 'Loamy sand') {
    var soilVars = {
      FC: 14.0,
      PWP: 5.0,
      MPAW: 9.0,
      coef: 4
    };  
  } else if (soilTexture == 'Loamy very fine sand') {
    var soilVars = {
      FC: 14.0,
      PWP: 5.0,
      MPAW: 9.0,
      coef: 5.5
    };  
  } else if (soilTexture ==  'Loamy coarse sand') {
    var soilVars = {
      FC: 14.0,
      PWP: 5.0,
      MPAW: 9.0,
      coef: 4.0
    };
  } else if (soilTexture == 'Sandy loam') {
    var soilVars = {
      FC: 20.0,
      PWP: 7.5,
      MPAW: 12.5,
      coef: 4.3
    };    
  } else if (soilTexture == 'Fine sandy loam') {
    var soilVars = {
      FC: 20.0,
      PWP: 4.0,
      MPAW: 16.0,
      coef: 3.3
    };
  } else if (soilTexture == 'Very fine sandy loam') {
    var soilVars = {
      FC: 23.0,
      PWP: 5.0,
      MPAW: 18.0,
      coef: 3.7
    };      
  } else if (soilTexture == 'Loamy fine sand') {
    var soilVars = {
      FC: 13.7,
      PWP: 6.5,
      MPAW: 7.2,
      coef: 8.65
    };
  } else if (soilTexture == 'Coarse sandy loam') {
    var soilVars = {
      FC: 30.3,
      PWP: 17.8,
      MPAW: 12.5,
      ceof: 4.53
    };
  } else if (soilTexture == 'Loam') {
    var soilVars = {
      FC: 30.3,
      PWP: 12.3,
      MPAW: 18.0,
      coef: 3.42
    };
  } else if (soilTexture == 'Silt loam') {
    var soilVars = {
      FC: 33.3,
      PWP: 12.4,
      MPAW: 20.9,
      coef: 3.0
    }; 
  } else if (soilTexture == 'Silt') {
    var soilVars = {
      FC: 29.5,
      PWP: 12.0,
      MPAW: 17.5,
      coef: 3.6
    };  
  } else if (soilTexture == 'Sandy clay loam') {
    var soilVars = {
      FC: 31.5,
      PWP: 15.3,
      MPAW: 16.2,
      coef: 3.68
    };         
  } else if (soilTexture == 'Clay loam') {
    var soilVars = {
      FC: 35.7,
      PWP: 19.3,
      MPAW: 16.4,
      coef: 4.92
    };
  } else if (soilTexture == 'Silty clay loam') {
    var soilVars = {
      FC: 37.0,
      PWP: 18.3,
      MPAW: 18.7,
      coef: 3.72
    };
  } else if (soilTexture == 'Sandy clay') {
    var soilVars = {
      FC: 28.0,
      PWP: 16.0,
      MPAW: 12.0,
      coef: 3.5
    };
  } else if (soilTexture == 'Silty clay') {
    var soilVars = {
      FC: 40.0,
      PWP: 22.5,
      MPAW: 17.5,
      coef: 3.5
    }; 
  } else if (soilTexture == 'Clay') {
      var soilVars = {
       FC: 40.3,
       PWP: 26.0,
       MPAW: 14.3,
       coef: 5.2
      };
    } else {
      var soilVars = {
        FC: 30.3,
        PWP: 12.3,
        MPAW: 18.0,
        coef: 3.42
      }; 
  }; 

  return soilVars;    
};

// enter soil texture 
var texClass = "Clay";
// var texClass = event["Sand];

let texVars = soilWater(texClass);
console.log("Soil Texture Variables: ", texVars); 

// pass function into module exports
module.exports = { soilWater };