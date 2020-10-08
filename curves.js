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

module.exports = { 
    nCurve,
    pCurve,
    kCurve
};