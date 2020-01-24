// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3));

// quando a corpo na funcao eh necessario colocar o return, pois se nao ira retornar undefined
const soma2 = (a, b) => {
  return a + b
}
console.log(soma(2, 5));

//---------------------------------------

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// --------------------------------------

// Parametro default
function log(texto = 'Node') {
  console.log(texto);
}

log()
log('Ola')
log(null)

// --------------------------------------

// Operador REST
//Varios parametros na chamada da funcao onde serao agrupados no array (spread)
function total(...numeros) {
  let total = 0
  console.log(numeros.length); // numeros eh o array na qual foi montada pelos valores passado no parametro
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5));