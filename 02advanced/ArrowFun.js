// Arrow function is easy to understand and implementation of arrow function is very easy
// Example

let Hello = (name) => {
    console.log(name)
}

//You can also write arrow function without curly braces

Hello("Danny")

let Welcome = (Name) => console.log(`Welcome ${Name} sir/mam`)

Welcome("Ganesh")


let MyTodo = [{
    title: 'take a BreakFast',
    isDOne: true
},
{
    title:'Go to College',
    isDOne: true
}, 
{
    title: 'Lunch',
    isDOne: false
},
{
    title: 'Go to Gym',
    isDOne: true
},
{
    title: 'Complting HomeWork',
    isDOne: false
},
{
    title: 'Go to Bed',
    isDOne: false
}]

let NotDone = MyTodo.find((tood) => {
    if (tood.isDOne==false) {
        console.log(tood.title)
    }
})

console.log(NotDone)


// let DoneTODOS = MyTodo.filter((todo) => {
//     return todo.isDOne===false
// })

//console.log(DoneTODOS)

// Assignment 

