// let MyTODO = ['BreakFast', 'College', 'Lunch', 'Gym', 'Dinner', 'Study']

// console.log(MyTODO.indexOf('Lunch'))

let NewTODOS = [{
    title: "breakfast",
    isDone: true
},
{
    title: "Lunch",
    isDone: true
},
{
    title: "Dinner",
    isDone: false
}]

// looping a array of object using function
// const todo = NewTODOS.findIndex(function(TODO, index){
//     console.log(TODO)
//     return TODO.title==='Dinner'
// })

// console.log(todo)


let MyTODO = function(mytodo, MyTitle){
    const TODO = mytodo.findIndex(function(todo, index){
        return todo.title===MyTitle
    })
    return mytodo[TODO]
}

console.log(MyTODO(NewTODOS, 'Lunch'))

