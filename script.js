 // Crie um array que receba 5 itens e exiba no console.
let carros= ["rs4","rs6","rs7","s8","r8"]
console.log(carros)

// Utilize um método para adicionar um nome ao inicio do array.
let carros= ["rs4","rs6","rs7","s8","r8"]
carros.unshift("rs3")
console.log(carros) 

// Utilize um método para remover o último nome do array.
let carros= ["rs4","rs6","rs7","s8","r8"]
carros.pop()
console.log(carros)

// Utilize um método para adicionar dois nomes ao fim do array.
let carros= ["rs4","rs6","rs7","s8","r8"]
carros.slice(4,5, "class-s", "serie 7")
console.log(carros)

// Utilize um método para remover o primeiro nome do array.
let carros= ["rs4","rs6","rs7","s8","r8"]
carros.shift()
console.log(carros)

// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort)