// Soil Temperature - Celsius 

'use strict';

function temperatureConversion(t, hardware) {
  console.assert(hardware);
  if (t==0 || t==4095) {
    return null;   
  }
    var tempHWParam = 100000;
    if (hardware == "hw33") {
        tempHWParam = 10000;
    }
    // convert to raw volts 
    const soilTempConverted1 =  ((t/4095)*3.3);
    const soilTempConverted2 = ((soilTempConverted1*tempHWParam)/(3.3 - soilTempConverted1));
    const soilTempConverted3 = (Math.log(10000/soilTempConverted2))/(Math.log(2.71828));
    const soilTempConverted4 = 3380/((3380/298.15) - soilTempConverted3);
    const soilTemp = soilTempConverted4 - 273.15;
    return soilTemp.toFixed(2);
};

// Raw ADC input 
// var rawTemp = event['rawTemp']
var rawTemp = 403;
// hardware version
// var hardware = event["hw"]
var hardware = "hw32"

var soilTemp = temperatureConversion(rawTemp, hardware); 
console.log("SoilTemp (C): ", soilTemp);

module.exports = {
    soilTemp
}