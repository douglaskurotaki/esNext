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

  O **then** retorna uma outra **primise**, por isso podemos **encadear**

  --- 

  