
function rasri(year){
    let month = year % 12
    switch(month){
        case 11 :
            month = "sheep"
            break;
        case 10 :
            month = "horse"
            break;  
        case 9 :
            month = "snake"
            break;
        case 8 :
            month = "dragon"
            break;        
        case 7 :
            month = "rabbit"
            break;
        case 6 :
            month = "tiger"
            break; 
        case 5 :
            month = "ox"
            break;
        case 4 :
            month = "rat"
            break;        
        case 3 :
            month = "pig"
            break;
        case 2 :
            month = "dog"
            break;        
        case 1 :
            month = "rooster"
            break;
        case 0 :
            month = "monkey"
            break;

    }return month
}

console.log(rasri(2001))
console.log(rasri(1995))
