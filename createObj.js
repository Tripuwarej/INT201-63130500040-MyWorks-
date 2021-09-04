
//การสร้าง Object
//แบบที่ 1 Object literals
let point = {x:10, y:20};
let person = {name:Freshy, age:19};

//แบบที่ 2 using new keyword
let customer = new Object();
let a = new Array();
let p = new Point();

//let person = {}; เท่ากับ let person = new Object();

//แบบที่ 3 Object.create() function 
//--> ส่วนใหญ่ใช้เพื่อ reuse โครงสร้าง property ของ Obj มาใช้ในอีก Obj นึง
let o = Object.create({x:1,y:2});
let p = Object.create(o);
console.log(p.x);
console.log(p.y);
