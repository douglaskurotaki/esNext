# V004 - Revisão do conteúdo básico de JavaScript ecmasript 8

## let e const
- O **let** é usado para variáveis com escopo em bloco
- O **var** é usado para escopo global

```javascript
{
  var a = 2 
  let b = 3
}
```

## Template String
**Podemos criar formas de juntar operações, funções ou qualquer tipo de código javascript com a string concatenada**
```javascript
const produto = 'iPad'
console.log(`${produto}`)
```

## Destructuring 
**Possibilita extrair dados de arrays ou objetos em variáveis distintas**
```js
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) //l = C; e = o, tras = ['d', '3', 'r']

const [x, , y] = [1, 2, 3]
console.log(x, y) //x = 1; y = 3

const {
  idade: i, //para o propriedade idade, podemos passar uma forma de implementar com outra
  nome
} = {
  nome: 'Ana',
  idade: 9
}
console.log(i, nome)
```

---

# V005 - Arrow functions || Parâmetros default || Operadores Rest
## Arrow function
**As arrow functions é uma forma simplificada de criar uma função sem muitas linhas de código**
```js
const soma = (a, b) => a + b
console.log(soma(2, 3));
```

**Quando há corpo na funcao, é necessário colocar o return, pois se não irá retornar undefined**
```js
const soma2 = (a, b) => {
  return a + b
}
console.log(soma(2, 5));
```

## Parâmetros default
**Podemos também, numa função, passar um parâmetro com valor pré-definido caso não seja passado valor para ele**
```js
function log(texto = 'Node') {
  console.log(texto);
}

log() // Node
log('Ola') //Ola
log(null) //null
```
## Operadores Rest
**É uma forma de, numa função, passar como parâmetro, um array, na qual não tem limites de argumentos, mas que obrigatóriamente é específico só pra ele**
```js
function total(...numeros) {
  let total = 0
  console.log(numeros.length); // numeros eh o array na qual foi montada pelos valores passado no parametro
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5));
```

---

# ES8 Object.values & Object.entries || Melhorias na Notação Literal || Classes
## ES8 Object.values & Object.entries
- **O Object.values é responsável por pegar o valor da chave correspondida**
- **O Ojbect.entries pega, retorna num array, a chave e o valor**

```js
const obj = {
  a: 1,
  b: 2,
  c: 3
}

console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); //chave e valor //[["a", 1], ["b", 2], ["c", 3]]
```

## Melhorias na Notação Literal
**Não é mais necessário, num objeto, escrever a sintaxe function, basta chamar a propriedade com ()**
```js
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return 'Oi Gente!'
  }
}

console.log(pessoa.nome, pessoa.ola())
```

## Classe
**Para instânciar, basta declarar o new antes de chamar a Classe**
```js
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au Au'
  }
}

console.log(new Cachorro().falar()); 
```

---

# V007 - Operadores Spread com Objeto e com Array
**Rest e Spread tem a mesma origem, só que o spread é uma forma de espalhar o array ou objeto em um outro**
-  Usar spread com objeto:

```js
const funcionario = {
  nome: 'Maria',
  salario: 12348.99
}

const clone = {
  ativo: true,
  ...funcionario //espalha propriedades de funcionario para o clone
}
```
<br>

- Usar spread com array:

```js
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
```

---

# V008 - Tagged Template
**É uma forma de modificar a saída dos template strings (``) usando uma função**
**Com ela é possível numa chamada de uma função, passar apenas a interpolação. A função irá reconhecer**
```js
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`);
// No primeiro parametro (partes), vai pegar somenete as string e nao as variaveis
// No segundo, vai pegar somente as variaveis e jogar o array 
```

# V009 - Tagged Template para Situação Real
**Nesse exemplo, vamos somente formatar o número para current**
```js
function real(partes, ...valores) {
  const resultado = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    resultado.push(partes[indice], valor)
  })

  return resultado.join('')
}

const preco = 22.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`); 
```
# V010 - Map como hash
**O map tem a possibilidade de criar um objeto com a chave de qualquer tipo**

- **Para passar uma propriedade precisamos somente instânciar o Map em uma variável e usar o método set**
- No primeiro parâmetro, passamos qualquer valor para a **chave** e no segundo passamos o **valor** da chave

```js
const tecnologias = new Map()
tecnologias.set('react', {
  framework: false
})

tecnologias.set('angular', {
  framework: true
})

console.log(tecnologias.react); // Nao funciona
console.log(tecnologias.get('react').framework) //false
```

**Podemos também criar o objeto dentro do parâmetro do Map, usando um array**
```js
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
```

---

# V011 - Set  Não Aceita Repetida e Não é Indexada
**É um objeto que possui somente chaves, e não aceita repetidas**
```js 
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
```

---

# V012 - for of - Modo de Rodar um laço pegando direto os valores, chaves
**Antes do of, tinhamos o in que, num array, pegava somente os indices. O of, agora, pega os valores**
```js
for (let letra of "Cod3r") {
  console.log(letra); //"C", "o", "d", "3", "r"
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
  console.log(i); //0, 1, 2
}
```

**Nesse exemplo, iremos, numa propriedade Map, verificar as chaves, valores e ambas**
```js
const assuntosMap = new Map([
  ['Map', {
    abordado: true
  }],
  ['Set', {
    abordado: true
  }],
  ['Promise', {
    abordado: false
  }]
])

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
```

