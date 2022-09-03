let MyTodo = {
    day: "Sunday",
    meet: 0,
    meetDone: 0,

    // you can define function in object
    addMeet: function(add){            
        // this keyword is referencing the properties of object within that function
       this.meet = this.meet + add
    },

    DoneMeet: function(num){
        this.meetDone = num - this.meetDone
    },

    getSummary: function(){
        this.meet = this.meet - this.meetDone
        console.log(`total ${this.meet} metting are pending and ${this.meetDone} is Done`)
    }
}

MyTodo.addMeet(5)
MyTodo.DoneMeet(3)
MyTodo.getSummary()
