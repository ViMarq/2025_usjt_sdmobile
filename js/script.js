
//IO-BOUND -> OPERAÇÕES DE ENTRADA E SAIDA

const fs = require('fs')
const abrirArquivo = function(nomeArquivo) {
    //callback: você define, mas não chama
    function exibirConteudo(erro, conteudo){
        if(erro) {
            console.log(`Erro: ${erro}`)
        }
        else{
            console.log(
                `Conteúdo: ${conteudo.toString()}`
            )
            const dobro = 
                Number(conteudo.toString()) * 2
            const finalizar = (erro) => {
                if(erro){
                    console.log(`Erro na escrita ${erro}`)
                }
                else{
                    console.log("Escrita ok")
                }
                console.log('D')
            }
            fs.writeFile(
                'dobro.txt',
                dobro.toString(),
                finalizar
            )
        }
        console.log('C')
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('B')

}
abrirArquivo('arquivo.txt')
console.log('A')



//Execução íncrona(bloqueante)
//Execução assíncrona(não bloqueante)

//CPU-BOUND -> PROCESSAMENTO QUE DEPENDE DA CPU EX: CONTAS


// function demorada(){
//     const atualMais2 = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //const d = demorada()
// setTimeout(() => {
//     const d = demorada()
//     console.log(`d1: ${d}`)
// }, 1000)
// setTimeout(() => {
//     const d = demorada()
//     console.log(`d2: ${d}`)
// }, 500)
// const e = 2 + a - b
// console.log(`e: ${e}`)


// const a = 2 + 7
// const b = 5
// console.log(a + b)



// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre serei o último...')



//Objetos Javascript (JSON)
//Javascript Object Notation
//Uma pessoa que se chama João tem 17 anos

//uma calculadora tem marca e modelo. Além disso, ela sabe fazer soma e subtração de dois numeros. 
// A soma, ela faz com arrow function sem usar return. 
// A subtração, ela faz com function regular

// const calculadora = {
//     marca: 'CIS',
//     modelo: 'Cientifica',
//     operacoes: {
//         soma: (a,b) => (a+b),
//         subtracao: function(a,b) {
//             return a-b
//         }
//     }
// }

// for(let operacoes of Object.keys(calculadora.operacoes)){
//     console.log(`${operacoes}: ${calculadora.operacoes[operacoes](2,3)}`)
// }

// console.log(calculadora.operacoes.soma(3,5))
// console.log(calculadora.operacoes.subtracao(3,5))



//Concessionária que tem CNPJ e endereço (logradouro, numero, bairo e estado) e um estoque de veículos. Cada
//veículo tem placa, marca e modelo. A concessionária pode ter a qualquer instante, 0 ou mais veículos

// const concessionaria = {
//     cnpj: '0001234481-0001',
//     endereco: {
//         logradouro: 'Rua XYZ',
//         numero: 3000,
//         bairro: {
//             nome: 'Vila automotiva',
//             cep: '00000-000',
//             cidade: {
//                 nome: 'Itu',
//                 regiao: 'Zona Sul',
//                 numeroHabitantes: '10000'
//             },
//             estado: { 
//                 codigo: 'SP' 
//             },  
//         }
//     },
//     veiculos: [
//         {
//             placa: 'ABC-1234',
//             marca: 'Ford',
//             modelo: 'Fiesta'
//         },
//         {
//             placa: 'JJJ-5678',
//             marca: 'GM',
//             modelo: 'Corsa'
//         }
//     ]
// }

// console.log(concessionaria.veiculos[1].modelo)
// for(let veiculo of concessionaria.veiculos){
//     console.log(veiculo.placa)
// }





//Uma pessoa se chama Maria, tem 21 anos e mora na rua ABC, numero 200, bairro Vila J.

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua ABC',
//         numero: 200,
//         bairro: 'Vila J'
//     }
// }

// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['bairro'])
// console.log(pessoa['endereco'].bairro)

// const pessoa = {
//     nome: 'João',
//     idade: 17
// }

//. e []

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa['nome'])
// console.log(pessoa['idade'])














// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(++cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     cont++
//     return {f1, f2}
// }

// const res = eAgora()
// console.log(res.f1())
// console.log(res.f2())

// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// const oiJoao = saudacoesFactory('Oi', 'João')
// const tchauJoao = saudacoesFactory('Tchau', 'João')
// oiJoao()
// tchauJoao()

// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     return g
// }
// const resultadoDaF()
// resultadoDaF()


// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

// function f(funcao){
//     console.log('f')
//     return funcao()
// }

// function g(){
//     console.log('g')
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return outraFuncao
// }
// console.log(f(g)())

//closures
// let umaFuncao = function(){
//     console;log('Fui armazenado em uma variavel')
//     return () => console.log('oi')
// }
// umaFuncao()()

// function f(funcao){
//     console.log(funcao)
//     funcao()
// }
// f(umaFuncao())

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




