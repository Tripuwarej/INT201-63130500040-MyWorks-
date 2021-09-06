
//Loop for

//1) for/in --> ใช้สำหรับเข้าถึง property ของ obj
let student = {id : 63130500040, name : "Tri"}
for(let std in student){
    console.log(std)
    console.log(student[std])
}


//2) for/of --> ทำซ้ำได้(iterable)ให้เราเข้าถึง item แต่ละตัวได้, Arrays
//ex.1
let age = [19,21,26,33,38]
for(let a of age){
    console.log(a)
}

//ex.2
let person = ["Lala","Lulu","Lilly","Laya"]
for(let p of person){
    console.log(p)
}