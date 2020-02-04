# V015 - AyncAwait

Nessa parte, foi criada uma forma mais simplificada de escrever uma **Promise**. 
É bom lembrar que a função é equivalete a Promise, então ele **retorna uma Promise**, dessa meneira precisamos especificar com o `then` após a chamada da função.
<br>
Utilizamos o mesmo exemplo da chamada de Promise (v014)

```js
const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''

      res.on('data', dados => {
        resultado += dados
      })

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))
        } catch (e) {
          reject(e)
        }
      })
    })
  })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises

let obterAlunos = async () => { //Para realizar funções assincronas, precisamos declarar async () => {}
  const ta = await getTurma('A') // await espera que a função passada termina para ser executada a próximo
  const tb = await getTurma('B') // é a mesma situação do then, porém, mais simplificado
  const tc = await getTurma('C') // sem o async, o await não funciona
  return [].concat(ta, tb, tc)
} // retorna um objeti AsyncFunction, desse modo, precisamo usar o then para obter um resultado específico

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))
```
