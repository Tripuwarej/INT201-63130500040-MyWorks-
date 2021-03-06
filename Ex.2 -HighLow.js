
//Ex.2

//ให้เขียน Function เพื่อทำการสุ่มเลข 1-10 และคืนผลลัพธ์เป็นเลขที่สุ่มได้ จากนั้นให้ผู้เล่นเดาเลข 
//โดยถ้ำเดาเลขเกินช่วง ให้หยุดเกม
// • ถ้าผู้เล่นเดาค่าที่สูงกว่าเลขที่สุ่มได้ ให้แสดงข้อความว่า “Too high” 
// • ถ้าผู้เล่นเดาค่าที่ต่ำกว่าเลขที่สุ่มได้ ให้แสดงข้อความว่า “Too Low”
// • ถ้าผู้เล่นเดาตรงกับค่าที่สุ่มได้ ให้แสดงข้อความว่า “You WIN!”
// กรณีเดาไม่ถูกต้อง ให้ทำการเฉลยเลขที่สุ่มได้

function randNumber(){
    return Math.floor(Math.random()*10)+1;
}

const randValue = randNumber()

function guessValue(num){
    if(randValue >= 1 && randValue <= 10){
        if(randValue > num){
            console.log(`Too Low, the random number is ${randValue}`);
        } else if(randValue < num){
            console.log(`Too High, the random number is ${randValue}`);   
        } else console.log('You Win!');
    }
}

console.log(guessValue(3));
