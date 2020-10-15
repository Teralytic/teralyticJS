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

module.exports = { 
    nCurve,
    pCurve,
    kCurve,
    pHCurve,
    o2Curve
};