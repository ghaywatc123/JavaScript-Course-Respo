let Mygrade = function(ObtainMark, TotalMark) {
    const MyPercent = (ObtainMark/TotalMark)*100
    let Grade = ''
    if (MyPercent>=90) {
        Grade= 'A+'
    }else if(MyPercent>80 && MyPercent<90){
        Grade='A'
    }else if(MyPercent<=80 && MyPercent>50){
        Grade='B'
    }else if(MyPercent>=35 && MyPercent<=50){
       Grade='C'
    }else{
        console.log("Your Faild")
    }

    return `Your Percentage is ${MyPercent} and your grade is ${Grade}`
}

console.log(Mygrade(50, 100))