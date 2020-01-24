//Nao aceita repeticao e nao eh indexada

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //Nao ira adicionar, pois ja esta incluso

console.log(times);
console.log(times.size);
console.log(times.has('Vasco'));
times.delete('Flamengo')
console.log(times.has('Flamengo'));



const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);