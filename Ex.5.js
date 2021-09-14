
//แบบฝึกหัดที่ 5 
//ให้เขียนโปรแกรมเพื่อหาผลลัพธ์จากเมนูที่ให้เลือก โดยพิจารณาจากค่าที่สุ่มในช่วง 1-100 จำนวน 3 ค่า

//กำหนด obj เก็บค่าที่ random ได้
let rand = {
    rand_1 : 0,
    rand_2 : 0,
    rand_3 : 0
}

//Function ในการสุ่มเลขที่มีค่าในช่วง 1-100 จำนวน 3 ค่า
console.log("List Number")   
function randNum(){
    return Math.floor(Math.random()*100)+1
} 

for(let i=0; i<3; i++){
    switch(i){
    case(i=0) :
        rand.rand_1 = randNum()
        console.log(rand.rand_1)
        break;
    case(i=1) :
        rand.rand_2 = randNum()
        console.log(rand.rand_2)
        break;
    case(i=2) :
        rand.rand_3 = randNum()
        console.log(rand.rand_3)
        break;
    }

}


//ให้เขียนFunction เพื่อแสดงเมนู
//1: Find Sumหาค่าผลรวม
//2: Find Minimum Value หาค่าน้อยที่สุด
//3: Find Maximum Value หาค่ามากที่สุด

function menu(num){
//    console.log("Please select Number")
//    console.log(" 1 <--Find Sum")
//    console.log(" 2 <--Find Minimum Value")
//    console.log(" 3 <--Find Maximum Value")

    if(num==1){
        console.log("1. Find Sum")
        let allSum = rand.rand_1 + rand.rand_2 + rand.rand_3
        return  console.log(allSum)       
    }else if(num==2){   
        console.log("2. Find Minimum Value")
        console.log(Math.min(rand.rand_1, rand.rand_2, rand.rand_3))
    }else if(num==3){
        console.log("3. Find Maximum Value")
        console.log(Math.max(rand.rand_1, rand.rand_2, rand.rand_3))
    }else {
        console.log("choose again ") 
    }

}

console.log(menu(1))
console.log(menu(2))
console.log(menu(3))

// console.log(rand.rand_1)
// console.log(rand.rand_2)
// console.log(rand.rand_3)
