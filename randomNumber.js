
//สุ่มเลข 1-10
function randNumberTen(){
    return Math.floor(Math.random()*10)+1
}
//Math.floor = ปัดทศนิยมออกให้เป็นเลขจน.เต็ม
//Math.random = สุ่มเลข 0 - 0.999.. แต่ไม่ถึง 1 เลยต้องคูณ 10 แล้วบวก 1
    
console.log(randNumberTen())


//สุ่มเลข 1-100
function randNumberHundred(){
    return Math.floor(Math.random()*100)+1
}

console.log(randNumberHundred())


//สุ่มเลข 1-1000
function randNumberThousand(){
    return Math.floor(Math.random()*1000)+1
}

console.log(randNumberThousand())