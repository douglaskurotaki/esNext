# V013 - Promises
- Promises é um **objeto** que representa a eventual **conclusão ou falha** de uma operação assincrona
- É um objeto retornado para o qual você **adiciona callbacks**, por exemplo:
```js
// Funcoes para callbacks
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

// Inserindo callbacks nos parametros
const promise = doSomething(); 
promise.then(successCallback, failureCallback);
```

<br>

- Outro exemplo que podemos fazer é exemplificar uma requisição de um banco:
```js
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {  // Precisamos passar pelo menos um parametro
    setTimeout(() => {  // Na funcao gerada fizemos um siteTimeout de segundos * 1000
      resolve(frase)  // resolve = aceito; reject = rejeitado
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que lega!')
  .then(frase => frase.concat('?!?')) // Pelo retorno da função promisse, podemos chamar a função then
  .then(outraFrase => console.log(outraFrase))  // Podemos também encadear
  .catch(e => console.log(e)) // trata erro quando for reject
  ```

  O **then** retorna uma outra **promise**, por isso podemos **encadear**

  --- 

# V014 - Usando Callbacks para Retorno de uma API

Para iniciarmos, precisamos instânciar o módulo *http*
`const http = require('http')`
<br>
Após isso, vamos criar a função:

```js
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  http.get(url, res => {
    let resultado = ''
    res.on('data', dados => { // Intercepta a resposta
      resultado += dados // Recebe todas os dados na respota
    })
    res.on('end', () => {
      callback(JSON.parse(resultado)) // Chama a funcao passada no parametro e faz o parse do JSON
    })
  })
}
```
A intenção, dessa função, é passar no parâmetro uma letra identificador para concatenar na url com objetivo da **api** retornar um **JSON** com seus respectivos valores. Assim, com um segundo parâmetro esperando uma **callback**, conseguimos manipular os valores obtidos e tratar ela na chamada com o parâmetro criado.
<br>
Após ter criado a função, vamos criar a chamada da mesma

```js
let nomes = []
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
  console.log(nomes)
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    console.log(nomes)
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
      console.log(nomes)
    })
  })
})
```
Aqui estamos chamando a função, passando a letra e a chamada callback

--- 

Agora, utilizando a **Promise**, a forma de construção fica mais fácil
```js 
const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on('data', dados => { // Intercepta a resposta
        resultado += dados // Recebe todas os dados na respota
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado)) // Chama a funcao passada no parametro e faz o parse do JSON
        } catch (e) {
          reject(e)
        }
      })
    })
  })
}
```
<br>

Aqui nós inserimos o **Promise**, fazendo retornar algun valor do mesmo tipo. Dentro da função precisou inserir o **resolve** e o **reject**
Na chamada, ficou mais simples. Nós chamamos o **Promise** para utilizar o método **all** que possibilita a chamada da função quantas vezes forem necessárias. Assim, ela espera o retorno de todos elas para conseguirmo tratar o mesmo. Os parâmetros, devem vir como array.

```js
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message))
```
  