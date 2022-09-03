let UserEmail = "ghaywatc@gmail.com"
let password = "pass@123"

console.log(password.length)

let NewUser = UserEmail.toUpperCase()
console.log(NewUser)

console.log(NewUser.toLowerCase())

console.log(UserEmail.trim())
//it will be remove all white spaces of string from both side

// check email fromat is correct


//includes method check the strig have a certain content or not
let userChecker = function(email){
if (email.includes('@gmail.com')) {
    return true
}
else{
    return false
}

}
console.log(userChecker(UserEmail))


// lets check some condition for password
// check condition of password not have @123

let passChecker = function(pass){
    if (pass.includes('pass@123')) {
        console.log("password not have @123")
    } else {
        console.log("password set successfully")
    }
}

passChecker(password)
