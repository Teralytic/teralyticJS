// n piecewise regression curve (mV to mol/L)
const nCurve = {
    vn1: 500.00,
    vn2: 1500.00,
    vn3: 1650.00,
    vn4: 1750.00,
    vn5: 2200.00,
    vn6: 3329.99,
    cn1: 0.0001,
    cn2: 0.001,
    cn4: 0.00178,
    cn5: 0.007,
    cn6: 0.01
}; 

// p piecewise regression curve (mV to mol/L)

const pCurve = {
    vp1: 500.00,
    vp2: 1500.00,
    vp3: 2200.00,
    vp4: 3299.99,
    cp1: 0.00005,
    cp2: 0.00007,
    cp3: 0.00009,
    cp4: 0.0001
};
// console.log(pCurve['vp1']);

// k piecewise regression curve (mV to mol/L)

const kCurve = {
    vk1: 3299.99,
    vk2: 2200.00,
    vk3: 2000.00,
    vk4: 500.00,
    ck1: 0.00005,
    ck2: 0.00009,
    ck3: 0.0002,
    ck4: 0.001 
};

// pH piecewise regression curve (mV to mol/L)

const pHCurve = {
    vpH1: 900.00,
    vpH2: 1000.00,
    vpH3: 1100.00,
    vpH4: 1640.00,
    vpH5: 1840.00,
    vpH6: 3299.99,
    cpH1: 4.00,
    cpH2: 6.00,
    cpH3: 6.50,
    cpH4: 7.70,
    cpH5: 8.10,
    cpH6: 12.00
};

// o2 piecewise curve (mV to PPM)
const o2Curve = {
   v1: 3.0769,
   v2: 200.0000,
   v3: 400.0000,
   v4: 600.0000,
   v5: 1206.1538,
   v6: 1867.6923,
   c1: 0.00018,
   c2: 2.66129,
   c3: 5.32258,
   c4: 8.05300,
   c5: 16.19851,
   c6: 25.15367
}; 

// degree growing days
const degreeGrowing = {
  Asparagus: 4.4,
  Barley: 4.4,
  Bean: 10,
  Beet: 3.3,
  Broccoli: 4.4,
  Carrot: 3.3,
  Collards: 4.4,
  Corn: 10,
  Cucumber: 12.8,
  Eggplant: 15.6,
  Grape: 10,
  Lettuce: 4.4, 
  Muskmellon: 10,
  Oats: 4.4,
  Onion: 1.7,
  Okra: 15.6,
  Pea: 4.4,
  Pepper: 10,
  Potato: 7.2,
  Rice: 10,
  Rye: 4.4,
  Sorghum: 10,
  Soybean: 10,
  Squash: 7.2,
  Strawberry: 3.9,
  Sunflower: 7.2,
  Sweetpotato: 15.6,
  Watermelon: 12.8,
  Wheat: 4.4,
  Other: 10
};

// temperature

// Soil Temperature - Celsius 
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

module.exports = { 
    nCurve,
    pCurve,
    kCurve,
    pHCurve,
    o2Curve,
    temperatureConversion,
    degreeGrowing
};