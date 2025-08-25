//closures
let umaFuncao = function(){
    console;log('Fui armazenado em uma variavel')
    return () => console.log('oi')
}
umaFuncao()()

function f(funcao){
    console.log(funcao)
    funcao()
}
f(umaFuncao())

//funcao que recebe funcao como paramtro quer dizer que é de alta ordem
//funcao que devolve uma funcao quer dizer que é de alta ordem
// const a = 1
// const f = b => b + 1 // expressao de primeira classe é quando pode ser manipulada e devolvida em forma de funcao, parametro
// f(1)
// const f2 = () => 1
//arrow functions
// const ehPar = n => {
//     n % 2 === 0
// } 
// console.log(ehPar)
// const triplo = v => {
//     console.log(n)
//     return 3 * n
// }
// console.log(triplo(5))
// const dobro = v => v * 2
// console.log(dobro(5))
// const f5 = a => {return 1}
// console.log(f5())
// const f4 = (a, b) => a + b
// console.log(f4(2, 3))
// const f3 = a => {console.log(a)}
// f3(1)
// const f2 = () => {console.log('oi')}
// f2()
// const f1 = a => {console.log(a)}
// f1(1)
//() => {}


//funções
//functions
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo(10))
// console.log(triplo)
// const dobro = function(n){
//     return 2 * n
// }
// console.log(dobro(5))
// function somar(a, b){
//     return a + b
// }
// const res = somar(2, 3)
// console.log(res)

// function hello(){
//     console.log('Hello')
// }
// hello()

// function hello(nome){
//     console.log(`Hello, ${nome}`)
// }
// hello('Ana')

//arrow functions


//vetores, listas, coleções
// v2 = [2, "abc", true]
// for(let i = 0; i < v2.length; i ++)
//     console.log(v2[i])
// v1 = []
// console.log(v1.length)
// v1[0] = 5
// console.log(v1)
// console.log(v1.length)
// v1[10] = "abc"
// console.log(v1.length)

//comparação
//== ou ===
// console.log([] == [])
// console.log([] == false)
//null: representa a inexistencia de um objeto definido
//undefined: objeto não está definido
// console.log([1] == 1)
// console.log(true == 1)
// console.log(1 === '1')
// console.log(1 == '1')
// console.log(1 == 1)

// coerção
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)

//tipos
// lista = [] //e, javascript
// List <String> lista = new ArrayList<>(); //em java
// let nome = "Ana"
// console.log(typeof(nome))
// nome = 2
// console.log(typeof(nome))
// nome.falar()
// String nome = "Ana";
// nome = 1;
// nome ,falar();

// declarando variáveis e constantes
// let idade = 19
// console.log(`Oi, ${nome}`)
// if (idade >= 18){
//     //hoist: içamento
//     let nome = 'João'
//     console.log(`${nome} pode dirigir`)
// }
// console.log(`Ate mais, ${nome}`)
// var linguagem = 'Javascript'
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem}`)
// var c = 2
// console.log(c)
// c = 3
// console.log(c)

// let a = 2
// a = a + 1
// console.log(a)

// var, const e let
// const nome = 'José' 
// const sobrenome = "Silva"

// interpolação
// console.log(`${nome} ${sobrenome}`)

// concatenação
//console.log(nome + " " + sobrenome)
//nome = 'José da Silva' // uma vez atribuido valor a ela, nao é possivel alterar




