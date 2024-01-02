function testSize(num) {
  // Altere apenas o código abaixo desta linha
  if(num < 5){
    return "Tiny"
  } else if (num < 10){
    return "Small"
  } else if( num < 15){
    return "Medium"
  } else if(num < 20){
    return "Large"
  } else{
    num >= 20
    return "Huge"
  }

  return "Change Me";
  // Altere apenas o código acima desta linha
}
console.log("-- Tiny --")
console.log(testSize(4))
console.log(testSize(5))

console.log("-- Small --")
console.log(testSize(9))
console.log(testSize(10))

console.log("-- Medium --")
console.log(testSize(14))
console.log(testSize(15))

console.log("-- Large --")
console.log(testSize(19))
console.log(testSize(20))

console.log("-- Huge --")
console.log(testSize(21))


