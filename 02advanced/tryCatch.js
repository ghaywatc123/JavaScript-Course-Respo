// let create Currency converted and use try catch when user provide wrong input


// In this case when error is occured the program will be not execute from error location
let DollerToRs = (doller) => {
    if (typeof doller == 'number') {
        console.log(doller * 64)
    }else{
     throw Error('Amount needs to be number')
    }
}

// let handle error with try catch
  try {
    DollerToRs('5')
  } catch (error) {
    console.log(error.message)
  }

// using try catch when error is occured than further program execution is not frezze

// after error line are printed
console.log("line after error occured")

 

