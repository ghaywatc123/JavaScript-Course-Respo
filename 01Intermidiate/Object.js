// declare object

let MyInfo = {
    Name: 'Chetan',
    RollNo: 44,
    City: 'Vaijapur'
}

console.log(MyInfo)
MyInfo.RollNo = 48
// accessing values of object

console.log(MyInfo.Name)

// can change values of object upto when you have not declared at const
console.log(MyInfo.RollNo)


// passing object to a function 

let ChangeName = function(obj){
    // try to change a name where declare in obj
    obj.Name = "Mahesh"
    console.log(obj.Name)
}

ChangeName(MyInfo)

// pass an object to function return object from function 

let NewFun = function(MyOBJ){
    return {
        Dream: "Best Coder",
        Degree: "MCA"
    }
}

// let access the vaules of object which is returning a function 

console.log(NewFun(MyInfo).Degree)