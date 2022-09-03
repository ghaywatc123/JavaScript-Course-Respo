let sayHello = function (){
    console.log("hello user")
}

sayHello()

// using parameter 

let helloWorld = function (user){
    console.log(`Welcome back ${user}`)
}

helloWorld('chetan')

// returning value from user 

let adder = function(num1, num2){
        return num1+num2
}

console.log(adder(10,10))

// Default Parameter

const DefaultParameter = function(name="uName"){
    console.log(`Hello ${name}`)
}

DefaultParameter()