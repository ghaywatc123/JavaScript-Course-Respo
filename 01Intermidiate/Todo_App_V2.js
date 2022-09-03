let MyTodo = {
    Day: "Monday",
    meet: 0,
    meetDone: 0
}

let addMeet = function(TODO, add = 0){
    TODO.meet = TODO.meet + add
}

let meetDone = function(TODO, Done = 0){
    TODO.meetDone = TODO.meetDone - Done
}

let meetReset = function(TODO){
    TODO.meet = 0
    TODO.meetDone= 0
}

let getSummary = function(TODO){
   let mettingLeft = TODO.meet + TODO.meetDone
   return `at ${TODO.Day} ${mettingLeft} metting is left`
}


addMeet(MyTodo, 5)
meetDone(MyTodo, 2)
console.log(getSummary(MyTodo))
console.log(MyTodo)
