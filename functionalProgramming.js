// -------------------------------------------------------------------------------------------
// Noor Alyasiri 
// 1001558073 
// -------------------------------------------------------------------------------------------

// 1. Array called inputtable with numbers between 1-10
const inputtable= [1,2,3,4,5,6,7,8,9,10]

// -------------------------------------------------------------------------------------------

// 2A. Set of multiples of 5 between 1 and 51
function fiveTable(x, newarr=[])
{
  while (x<51){ // struggling to get rid of the while loop
  if (newarr.filter(checkIn)){ //uses the checkIn function to check the input that is being passed 
    newarr.push(x) //if it passes the check, x is pushed onto the array
    // x=x+5
    fiveTable(x=x+5) // recurse
  }
  }
  return newarr // return the new array
} 
function checkIn(input){
  return input%5==0
}
console.log(fiveTable(5))

// 2B. Set of multiples of 13 between 1 and 131

function thirteenTable(x, newarr=[])
{
  while (x<131){ // struggling to get rid of the while loop
  if (newarr.filter(checkThirteen)){ //uses the checkThirteen function to check for multiples
    //no remainders!
    newarr.push(x) //if it passes the check, it is pushed onto the array
     //x=x+13
    thirteenTable(x=x+13) //recurse
  }
  }
  return newarr //return the new array
} 
console.log(thirteenTable(13))

function checkThirteen(x){
  return x%13==0;
}

// 2C. Set of squares of the numbers in inputtable. 
const squaresTable = inputtable.map(getSq) //goes through the array and squares the values
function getSq(x) {
  return x**2;
}
console.log(squaresTable)

// -------------------------------------------------------------------------------------------

// 3. Get the odd multiples of 5 between 1 and 100. 
function oddFive(x, newarr_2=[])
{
 while (x<101) { 
  if (newarr_2.filter(checkIn)){ //uses the checkIn function to determine multiples of 5
    newarr_2.push(x) //push onto array if it passes the check 
    //x=x+5
    oddFive(x=x+5) //recurse
    }
  }
  newarr_2.filter  
  return newarr_2
} //end of function

function checkEven(val) {
  return val % 2 !=0; //checks if passed in value is ODD
}

function checkIn(input){
    return input%5==0 //checks if input is a multiple of five
}

const newRes = oddFive(0).filter(checkEven); //filters the array for selected values
console.log(newRes)

// -------------------------------------------------------------------------------------------

// 4. Get the sum of even multiples of 7 between 1 and 100.
function sevenTable(x, newarr=[])
{
  while (x<101){ // struggling to get rid of the while loop
  if (newarr.filter(checkSeven)){ //checks for multiples of seven using checkSeven
    newarr.push(x) //if value passes the check, it is pushed onto the array
    sevenTable(x=x+7) //recurse
  }
  }
  
  return newarr.filter(checkOdd).reduce(sumArr,0)
  //return newarr.filter(checkOdd)
} 
console.log(sevenTable(0))

function checkSeven(x){ //checks for multiples of 7
  return x%7==0;
}
function checkOdd(val) { //checks if passed in value is EVEN
  return val % 2 ==0;
}
function sumArr(x,y){ //sums the passed in values together 
    return x+y;
}

// -------------------------------------------------------------------------------------------
// 5. Use currying to rewrite the function below
// function cylinder_volume(r,h){
//    var volume=0.0;
//    volume=3.14*r*r*h;
//    return volume;
//}
var vol = r => h => 3.14*r*r*h //gets the value of volume using fat arrow notation
function curr(vol){
    return vol; //passes in a single value and returns that value as the output
        }
console.log((curr(vol(5)(10))))
console.log((curr(vol(5)(17))))
console.log((curr(vol(5)(11))))

// -------------------------------------------------------------------------------------------

// 6. Use the following code to take advantage of closures 

// -------------------------------------------------------------------------------------------

// 8. BONUS 

// 8.3: Set of any multiples between 1 and 100
function anyMultiple(x, multiple, newarr_2=[]) //use the value of multiple to get a list of any multiples inputting in by the user 
{
 while (x<101) { 
  if (newarr_2.filter(checkIn)){ //filters the inputted value to see if there is a remainder
    newarr_2.push(x) //if it passes the check, then it is pushed onto the array
    anyMultiple(x=x+multiple) //recurse
    }
  }
  return newarr_2 // return the new array
} //end of function

function checkEven(val) { //check for ODD values
  return val % 2 !=0;
}

function checkIn(input,x){ //check the input for remainders (to determine if multiples or not)
    return input%x==0
}
//const newRes= oddFive(10,5)
const newResult = anyMultiple(10,5).filter(checkEven); //check for ODD values
const newResult2 = anyMultiple(10,5).filter(checkOdd); //check for EVEN values 
console.log(newResult)
console.log(newResult2)

// 8.4: Get the sum of even or odd multiples of any value between 1 and 100 

function anyTable(x, multiple, newarr=[])
{
  while (x<101){ // struggling to get rid of the while loop
  if (newarr.filter(checkAny)){  //check the input for remainders/multiples and then filters
    newarr.push(x) //pushes the accepted values onto the array
    anyTable(x=x+multiple) //recurse
  }
  }

  return newarr 
} 

console.log(anyTable(10,5).filter(checkOdd).reduce(sumArr,0)) //filters the array for even  
                                                              // values and then sums them up
console.log(anyTable(10,5).filter(checkEven).reduce(sumArr,0))//filters the array for odd
                                                              // values and then sums them up
function checkAny(x, input){ //check for remainders
  return input%x==0;
}

function sumArr(x,y){ //sum up the values
    return x+y;
}

function checkOdd(val) { //checks for EVEN values
  return val % 2 ==0;
}

function checkEven(val) { //checks for ODD values 
  return val % 2 !=0;
}