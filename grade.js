
//คำนวณเกรด

function grade(score){
    if(score >= 85){
        console.log("Your grade is A+")
    }else if(score >= 80){
        console.log("Your grade is A")
    }else if(score >= 75){
        console.log("Your grade is B+")
    }else if(score >= 70){
        console.log("Your grade is B")
    }else if(score >= 65){
        console.log("Your grade is C+")
    }else if(score >= 60){
        console.log("Your grade is C")
    }else if(score >= 55){
        console.log("Your grade is D+")
    }else if(score >= 50){
        console.log("Your grade is D")
    }else {
        console.log("Your grade is F")
    }
}

grade(88)