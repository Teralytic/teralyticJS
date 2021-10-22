'use strict';


// This script is for estimating NPK values from Teralytic sensors
// It asks what the environment is Lab or Field --> meaning we need to start 
// tagging sensors whether they are in lab or field environment
// (For example Farrel Hall for MSU is in a lab controlled environment)
// if it's in the lab we actually care about what the month is -->
// we want to know the month it was installed as well as the current month

// in lines 35 - 53 the raw mV values (both at start and the most current)
// are hardcoded --> We need to update this with actual raw inputs 

// set season parameters 
let date_obj = new Date();
// current month
let current_month = ("0" + (date_obj.getMonth() + 1)).slice(-2);
// hardcode month for testing 
//let current_month = 4;
console.log("Current Month: ", current_month); 
// get day of month
let start_day = ("0" + date_obj.getDate()).slice(-2);
console.log("Start Day: ", start_day); 

// SELECT Environment (Lab or Field)
// Soil nutrient levels in a lab will likely use homogenous potting mix, whereas 
// conditions in the field more heterogenus acros soil profiles and depth
// There may be other soil testing envionments in future (like water)

//var environment = "lab";
var environment = "field"
//var environment = "water"

// bring in starting raw values from the EVENT --> This input should be the average of mutliple
// raw readings after the sensor is installed and soil settled 
//var n6_raw_start = event["n6_raw"];
var n6_raw_start = 1500;
var n18_raw_start = 1781;
var n36_raw_start = 1800;
var p6_raw_start = 1482;
var p18_raw_start = 2000;
var p36_raw_start = 3100;
var k6_raw_start = 2600;
var k18_raw_start = 2500;
var k36_raw_start = 1100;
// initiate your current raw reading (which you will compare with the starting level )
var n6_raw_current = 1550;
var n18_raw_current = 1800;
var n36_raw_current = 1790;
var p6_raw_current = 1550;
var p18_raw_current = 2200;
var p36_raw_current = 3000;
var k6_raw_current = 2550;
var k18_raw_current = 2600;
var k36_raw_current = 1200;
// initaite value to store the difference between start and current PPM vals
var n6_ppm_diff;
var n18_ppm_diff;
var n36_ppm_diff;
var p6_ppm_diff;
var p18_ppm_diff;
var p36_ppm_diff;
var k6_ppm_diff;
var k18_ppm_diff;
var k36_ppm_diff;
// initiate your nutrient sensor outputs across all depths 
var n6_start;
var n18_start;
var n36_start;
var p6_start;
var p18_start;
var p36_start;
var k6_start;
var k18_start;
var k36_start;
// initate your output variables 
var n6_end;
var n18_end;
var n36_end;
var p6_end;
var p18_end;
var p36_end;
var k6_end;
var k18_end;
var k36_end;

// trigger functions based on environment 
// 1 mV = 0.16 PPM for N and K
// 1 mV = 0.016 PPM for P 

// LAB probes
if (environment == "lab") {
    console.log("This sensor is in a lab.")
    n6_start=50, n18_start=50, n36_start=50;
    p6_start=5, p18_start=5, p36_start=5;
    k6_start=150, k18_start=150, k36_start=150;
    console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start)
    console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start)
    console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start)

    // N - LAB 

    if (n6_raw_current > n6_raw_start) {
        n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
        console.log("n6_ppm_diff ", n6_ppm_diff);
        n6_end = n6_start + n6_ppm_diff;
        console.log("n6_end: ", n6_end);
    } if (n18_raw_current > n18_raw_start) {
        n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
        console.log("n18_ppm_diff ", n18_ppm_diff);
        n18_end = n18_start + n18_ppm_diff;
        console.log("n18_end: ", n18_end);
    } if (n36_raw_current > n36_raw_start) {
        n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
        console.log("n36_ppm_diff ", n36_ppm_diff);
        n36_end = n36_start + n36_ppm_diff;
        console.log("n36_end: ", n36_end);
    } if (n6_raw_current < n6_raw_start) {
        n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
        console.log("n6_ppm_diff ", n6_ppm_diff);
        n6_end = n6_start - n6_ppm_diff;
        console.log("n6_end: ", n6_end);
    } if (n18_raw_current < n18_raw_start) {
        n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
        console.log("n18_ppm_diff ", n18_ppm_diff);
        n18_end = n18_start - n18_ppm_diff;
        console.log("n18_end: ", n18_end);
    } if (n36_raw_current < n36_raw_start) {
        n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
        console.log("n36_ppm_diff ", n36_ppm_diff);
        n36_end = n36_start - n36_ppm_diff;
        console.log("n36_end: ", n36_end);
    }

    // P - LAB 

    if (p6_raw_current > p6_raw_start) {
        p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
        console.log("p6_ppm_diff ", p6_ppm_diff);
        p6_end = p6_start + p6_ppm_diff;
        console.log("p6_end: ", p6_end);
    } if (p18_raw_current > p18_raw_start) {
        p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
        console.log("p18_ppm_diff ", p18_ppm_diff);
        p18_end = p18_start + p18_ppm_diff;
        console.log("p18_end: ", p18_end);
    } if (p36_raw_current > p36_raw_start) {
        p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
        console.log("p36_ppm_diff ", p36_ppm_diff);
        p36_end = p36_start + p36_ppm_diff;
        console.log("p36_end: ", p36_end);
    } if (p6_raw_current < p6_raw_start) {
        p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
        console.log("p6_ppm_diff ", p6_ppm_diff);
        p6_end = p6_start - p6_ppm_diff;
        if (p6_end <= 0) {
            p6_end = 1
        };
        console.log("p6_end: ", p6_end);
    } if (p18_raw_current < p18_raw_start) {
        p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
        console.log("p18_ppm_diff ", k18_ppm_diff);
        p18_end = p18_start - p18_ppm_diff;
        if (p18_end <= 0) {
            p18_end = 1
        };
        console.log("p18_end: ", k18_end);
    } if (p36_raw_current < p36_raw_start) {
        p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
        console.log("p36_ppm_diff ", p36_ppm_diff);
        p36_end = p36_start - p36_ppm_diff;
        if (p36_end <= 0) {
            p36_end = 1
        };
        console.log("p36_end: ", p36_end);
    }

    // K - LAB 

    if (k6_raw_current > k6_raw_start) {
        k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
        console.log("k6_ppm_diff ", k6_ppm_diff);
        k6_end = k6_start + k6_ppm_diff;
        console.log("k6_end: ", k6_end);
    } if (k18_raw_current > k18_raw_start) {
        k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
        console.log("k18_ppm_diff ", k18_ppm_diff);
        k18_end = k18_start + k18_ppm_diff;
        console.log("k18_end: ", k18_end);
    } if (k36_raw_current > k36_raw_start) {
        k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
        console.log("k36_ppm_diff ", k36_ppm_diff);
        k36_end = k36_start + k36_ppm_diff;
        console.log("k36_end: ", k36_end);
    } if (k6_raw_current < k6_raw_start) {
        k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
        console.log("k6_ppm_diff ", k6_ppm_diff);
        k6_end = k6_start - k6_ppm_diff;
        console.log("k6_end: ", k6_end);
    } if (k18_raw_current < k18_raw_start) {
        k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
        console.log("k18_ppm_diff ", k18_ppm_diff);
        n18_end = k18_start - k18_ppm_diff;
        console.log("k18_end: ", k18_end);
    } if (k36_raw_current < k36_raw_start) {
        k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
        console.log("k36_ppm_diff ", k36_ppm_diff);
        k36_end = k36_start - k36_ppm_diff;
        console.log("k36_end: ", k36_end);
    }


 // FIELD probes ====================================================================
 // main difference is that Field probes care about the month and day, but lab probes don't 
} else if (environment == "field") {
    console.log("This sensor is in the field.")
    // March to May 
    if (current_month >=3 & current_month <5) {
        n6_start=15, n18_start=9, n36_start=3;
        p6_start=3, p18_start=1.8, p36_start=1;
        k6_start=130, k18_start=78, k36_start=26;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);

        // get current day 
        //var current_day = ("0" + date_obj.getDate()).slice(-2);
        // hardcode --> current_day for testing purposes 
        var current_day = start_day + 1

        // N - FIELD 
            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }

        // May - June 

    } else if (current_month >=5 & current_month <6) {
        n6_start=22, n18_start=13, n36_start=4;
        p6_start=4, p18_start=2.4, p36_start=0.8;
        k6_start=140, k18_start=84, k36_start=28;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }
        
    // June - July 

    } else if (current_month >=6 & current_month <7) {
        n6_start=28, n18_start=17, n36_start=6;
        p6_start=5, p18_start=3, p36_start=1;
        k6_start=150, k18_start=90, k36_start=30;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }

    // July - Aug 

    } else if (current_month >=7 & current_month <8) {
        n6_start=15, n18_start=9, n36_start=3;
        p6_start=3, p18_start=1.8, p36_start=1;
        k6_start=130, k18_start=78, k36_start=26;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }

    // Aug

    } else if (current_month == 8) {
        n6_start=10, n18_start=6, n36_start=2;
        p6_start=2.5, p18_start=1.5, p36_start=0.5;
        k6_start=120, k18_start=72, k36_start=24;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }
    
    // September

    } else if (current_month == 9) {
        n6_start=22, n18_start=13, n36_start=4;
        p6_start=4, p18_start=2.4, p36_start=0.8;
        k6_start=140, k18_start=84, k36_start=28;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }
    
    // October
    } else if (current_month == 10) {
        n6_start=35, n18_start=21, n36_start=7;
        p6_start=5, p18_start=3, p36_start=1;
        k6_start=150, k18_start=90, k36_start=30;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }
    
    // November - December
    } else if (current_month > 10 & current_month <= 12) {
        n6_start=22, n18_start=13, n36_start=4;
        p6_start=4, p18_start=2.4, p36_start=0.8;
        k6_start=140, k18_start=84, k36_start=28;
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);
        console.log("p6_start: ", p6_start, "| p18_start: ", p18_start, "| p36_start: ", p36_start);
        console.log("k6_start: ", k6_start, "| k18_start: ", k18_start, "| k36_start: ", k36_start);
        console.log("n6_start: ", n6_start, "| n18_start: ", n18_start, "| n36_start: ", n36_start);

            if (n6_raw_current > n6_raw_start) {
                n6_ppm_diff = (n6_raw_current - n6_raw_start) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start + n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current > n18_raw_start) {
                n18_ppm_diff = (n18_raw_current - n18_raw_start) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start + n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current > n36_raw_start) {
                n36_ppm_diff = (n36_raw_current - n36_raw_start) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start + n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }
            if (n6_raw_current < n6_raw_start) {
                n6_ppm_diff = (n6_raw_start - n6_raw_current) * 0.16; 
                console.log("n6_ppm_diff ", n6_ppm_diff);
                n6_end = n6_start - n6_ppm_diff;
                console.log("n6_end: ", n6_end);
            } if (n18_raw_current < n18_raw_start) {
                n18_ppm_diff = (n18_raw_start - n18_raw_current) * 0.16; 
                console.log("n18_ppm_diff ", n18_ppm_diff);
                n18_end = n18_start - n18_ppm_diff;
                console.log("n18_end: ", n18_end);
            } if (n36_raw_current < n36_raw_start) {
                n36_ppm_diff = (n36_raw_start - n36_raw_current) * 0.16; 
                console.log("n36_ppm_diff ", n36_ppm_diff);
                n36_end = n36_start - n36_ppm_diff;
                console.log("n36_end: ", n36_end);
            }

            // P - Field

            if (p6_raw_current > p6_raw_start) {
                p6_ppm_diff = (p6_raw_current - p6_raw_start) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start + p6_ppm_diff;
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current > p18_raw_start) {
                p18_ppm_diff = (p18_raw_current - p18_raw_start) * 0.016; 
                console.log("p18_ppm_diff ", p18_ppm_diff);
                p18_end = p18_start + p18_ppm_diff;
                console.log("p18_end: ", p18_end);
            } if (p36_raw_current > p36_raw_start) {
                p36_ppm_diff = (p36_raw_current - p36_raw_start) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start + p36_ppm_diff;
                console.log("p36_end: ", p36_end);
            } if (p6_raw_current < p6_raw_start) {
                p6_ppm_diff = (p6_raw_start - p6_raw_current) * 0.016; 
                console.log("p6_ppm_diff ", p6_ppm_diff);
                p6_end = p6_start - p6_ppm_diff;
                if (p6_end <= 0) {
                    p6_end = 1
                };
                console.log("p6_end: ", p6_end);
            } if (p18_raw_current < p18_raw_start) {
                p18_ppm_diff = (p18_raw_start - p18_raw_current) * 0.016; 
                console.log("p18_ppm_diff ", k18_ppm_diff);
                p18_end = p18_start - p18_ppm_diff;
                if (p18_end <= 0) {
                    p18_end = 1
                };
                console.log("p18_end: ", k18_end);
            } if (p36_raw_current < p36_raw_start) {
                p36_ppm_diff = (p36_raw_start - p36_raw_current) * 0.016; 
                console.log("p36_ppm_diff ", p36_ppm_diff);
                p36_end = p36_start - p36_ppm_diff;
                if (p36_end <= 0) {
                    p36_end = 1
                };
                console.log("p36_end: ", p36_end);
            }

            // K - Field

            if (k6_raw_current > k6_raw_start) {
                k6_ppm_diff = (k6_raw_current - k6_raw_start) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start + k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current > k18_raw_start) {
                k18_ppm_diff = (k18_raw_current - k18_raw_start) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                k18_end = k18_start + k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current > k36_raw_start) {
                k36_ppm_diff = (k36_raw_current - k36_raw_start) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start + k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            } if (k6_raw_current < k6_raw_start) {
                k6_ppm_diff = (k6_raw_start - k6_raw_current) * 0.16; 
                console.log("k6_ppm_diff ", k6_ppm_diff);
                k6_end = k6_start - k6_ppm_diff;
                console.log("k6_end: ", k6_end);
            } if (k18_raw_current < k18_raw_start) {
                k18_ppm_diff = (k18_raw_start - k18_raw_current) * 0.16; 
                console.log("k18_ppm_diff ", k18_ppm_diff);
                n18_end = k18_start - k18_ppm_diff;
                console.log("k18_end: ", k18_end);
            } if (k36_raw_current < k36_raw_start) {
                k36_ppm_diff = (k36_raw_start - k36_raw_current) * 0.16; 
                console.log("k36_ppm_diff ", k36_ppm_diff);
                k36_end = k36_start - k36_ppm_diff;
                console.log("k36_end: ", k36_end);
            }
    }
} else {
    console.log("This sensor is in an unknown environment.")
};
