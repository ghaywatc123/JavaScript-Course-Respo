let num1 = 22
let num2 = 7

let result = (num1/num2)

console.log(result)

// toFixed method print or reduce the number after decimal point it is depending on you how many number you have to need after decimal point you have to need
let newResult = result.toFixed(2)

// floor method rounding up value which is nearest lower 
console.log(Math.floor(newResult))

// ceil method rouding up value which nearest greater 
console.log(Math.ceil(newResult))

//By default random is generating number between 0 to 1
console.log(Math.random())

// it is printing random number between 0 to 10 but not 10 because it is printing random value which  is less than its range
console.log(Math.random() * 10)