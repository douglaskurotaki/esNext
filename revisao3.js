// ES8 Object.values /Object.entries
// Pega valores do objeto / Pega um array (chave e valor)
const obj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(Object.values(obj));
console.log(Object.entries(obj)); //chave e valor



// Melhorias na Notacao Literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() { //Nao precisa mais -> ola = function() { }
    return 'Oi Gente!'
  }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au Au'
  }
}

console.log(new Cachorro().falar()); // new eh instancia