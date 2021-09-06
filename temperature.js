
//เปลี่ยนองศาเซลเซียสเป็นองศาฟาเรนไฮต์
function toFahrenheit(cel){
    let fah = cel*(9/5)+32
    return `${cel}°C = ${fah}°F`
}

console.log(toFahrenheit(30))
console.log(toFahrenheit(37))


//เปลี่ยนองศาเซลเซียสเป็นเคลวิน
function toKelvin(cels){
    let kel = cels + 273
    return `${cels}°C = ${kel} K`
}

console.log(toKelvin(30))
console.log(toKelvin(37))