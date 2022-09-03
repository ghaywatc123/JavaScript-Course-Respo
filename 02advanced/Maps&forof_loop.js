let info1 = {
    name: "Sam",
    age: 24,
    Country: 'Australia'
}

let info2 = {
    name: 'Dinesh',
    age: 37,
    Country: 'India'
}

let info3 = {
    name: 'Satish',
    age: 20,
    Country: 'India',
}

// Map is a collection of elements where each element is stored as a Key, value pair. 
// Map object can hold both objects and primitive values as either key or value. 
// When we iterate over the map object it returns the key, 
// value pair in the same order as inserted.

let map = new Map()

map.set(info1.name, info1.Country)
map.set(info2.name, info2.Country)
map.set(info3.name, info3.Country)

console.log(map)

console.log(map.size)  // it will be print how many entities in map

console.log(map.keys()) // it will be print all key of map

console.log(map.get(info1.name)) // it will be print value of key

console.log(map.values()) // it will be print all values of map


// for of loop 

for (const key of map.keys()) {
    if (key === "Sam") {
        console.log(map.get(key))
    }
}