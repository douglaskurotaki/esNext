//tagged template - processa o template dentro de uma funcao
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