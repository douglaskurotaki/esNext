// let e const 
{
  var a = 2 // Não tem escopo de bloco
  let b = 3 //Tem escopo de bloco
}

console.log(a);
// console.log(b); 

// -----------------

//Template String
const produto = 'iPad'
console.log(`${produto}`)

//-------------------

//Destrcturing
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) //l = C; e = o, tras = ['d', '3', 'r']

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {
  idade: i, //para o propriedade idade, podemos passar uma forma de implementar com outra
  nome
} = {
  nome: 'Ana',
  idade: 9
}
console.log(i, nome);