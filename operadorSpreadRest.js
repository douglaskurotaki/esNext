//operador ... rest (juntar) /spread(espalhar)
//usar rest com parametros de funcao

// usar spread com objeto
const funcionario = {
  nome: 'Maria',
  salario: 12348.99
}

const clone = {
  ativo: true,
  ...funcionario //espalha propriedades de funcionario para o clone
}

console.log(clone);


//spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);