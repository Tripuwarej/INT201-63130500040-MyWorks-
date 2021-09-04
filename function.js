
//ex1
function sayHello(name,input){
    return "Hello" + name + input
}

console.log(sayHello("Freshy","kubbb"));


//ex2
function distance(p1,p2){
    console.log(typeof p1); //object
    console.log(typeof p2); //object
    return Math.sqrt(((p1.x - p2.x) **2) + ((p1.y - p2.y)**2)); //Math.sqrt คือการหารากที่2
}

console.log(distance({x:1, y:1},{x:2, y:2})); //1.4142135623730951
//นำ {x:1, y:1} แทนค่าลงไปใน p1 และ {x:2, y:2} แทนค่าลงไปใน p1



//ex3
let square = {
    area : function() {
        return this.side * this.side ; },
    side : 10 }; 

//หรือเขียนแบบ shortcut 
let square2 = {
    area2() {return this.side * this.side ; },
    side : 5 }; 


    console.log(square.area()); //100
    console.log(square2.area2()); //25