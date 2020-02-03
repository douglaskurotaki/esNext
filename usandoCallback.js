// Sem promises

const http = require('http')

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

// let nomes = []
// getTurma('A', alunos => {
//   nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//   console.log(nomes)
//   getTurma('B', alunos => {
//     nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//     console.log(nomes)
//     getTurma('C', alunos => {
//       nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//       console.log(nomes)
//     })
//   })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message))
//chamada de todas as promises. Quando todas forem resolvidas, ela vai começar a ser resultadas em cadeia