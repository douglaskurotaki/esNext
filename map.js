// Forma de criar um objeto com propriedades de qualquer tipo

const tecnologias = new Map()
tecnologias.set('react', {
  framework: false
})

tecnologias.set('angular', {
  framework: true
})

console.log(tecnologias.react); // Nao funciona
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
})

console.log(chavesVariadas.has(123)); //Verfica se 123 está na hash
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); //Verifica tamanho da hash

console.log(chavesVariadas);