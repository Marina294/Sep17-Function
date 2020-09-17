// Function 1
function remainder (a,b) {
    return a % b;
}

console.log(remainder(12,5));

// ------------------------------------------------------
// Function 2
function minutes (m) {
    let num = m * 60;
    return Number.parseFloat(num).toFixed(2);
}

console.log(`${minutes(10)} secounds`) 

// ------------------------------------------------------
// Function 3
function hours (h) {
    let num = h * 60 * 60;
    return Number.parseFloat(num).toFixed(4);
    
}

console.log(`${hours(10)} secounds`)


// ------------------------------------------------------
// Function 4
function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(41);
fToC(32);

// ------------------------------------------------------
// Function 5
function triangleArea(w,h) {
    let triangle = w * h / 2;
    console.log(triangle);
}

triangleArea(12,45)

// ------------------------------------------------------
// Function 6
function evenOrOdd(x) {
    if (x % 2 === 0) {
        console.log("even")
    }
    else {
        console.log("odd")   
    }
}

evenOrOdd(11)