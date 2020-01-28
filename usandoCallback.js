// Sem promises

const http = require('http')

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