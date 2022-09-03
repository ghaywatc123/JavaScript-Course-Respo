const numbers = ["one","two","three", "Four","five"]

//numbers[1]="six"

console.log(numbers)

// shift method 

numbers.shift()
console.log("array after appling shift method")
console.log(numbers)
//shift method removes elements from begining of array

//unshift method 

numbers.unshift("zero")
console.log("array after appling unshift method")
console.log(numbers)
//unshift method insert elements at begining of array, it is just like oppsite of shift method


// pop method

numbers.pop()
console.log("array after appling pop method")
console.log(numbers)
//it is removing element from the end of array


//push method

numbers.push("seven")
console.log("array after appling push method")
console.log(numbers)
// it is insrting elements at end of an array


// splice method

numbers.splice(2, 2, "eight")
console.log("array after appling push method")
console.log(numbers)
// This method have 3 parameter 1) first have index of an element where you want to delete element from
// 2) second means how many element you want to delete including starting element 
// 3) third have new element which you want to insert on that deleted element