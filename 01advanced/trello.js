const days = ['mon','tue','wed','thr','fri','sat'] 

// let Hello = function(day) {
//     console.log("Hello Javascript")
// }

// days.forEach(function(day, index) {
//     console.log(`${index+1} --> ${day}`)
// })


for (let i = 0; i < days.length; i++) {
    console.log(days[i])
    
}

console.log("Lets print this in reverse order")

for (let i = days.length-1; i >=0; i--) {
    console.log(days[i])
    
}
